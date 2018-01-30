/* eslint-disable */
const mutation = require('../../graphql/resolvers/mutation');
const query = require('../../graphql/resolvers/query');

const eventsResults = query.events();
const roomsResults = query.rooms();

const eventId = Math.floor(Math.random() * eventsResults.length) + 1;
const roomId = Math.floor(Math.random() * roomsResults.length) + 1;
const ev = query.event(1);

test(`changeEventId - change RoomId in event (eventId = ${eventId}) to ${roomId}`, () => {
  ev.roomId = roomId;
  expect(mutation.changeEventRoom(eventId, roomId)).toBe(ev);
});
