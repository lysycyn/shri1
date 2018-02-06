const Model = require('./model');

/**
 * Class representing a Calendar Model.
 */
class CalendarModel extends Model {
    /**
     * Create a model.
     * @param {Object} data - data to represent
     */
    constructor(data) {
        super();

        const { events, rooms } = data;

        this._data.rooms = rooms.reduce((calendar, room) => {
            const calendarRow = {
                room,
                events: [],
            };

            calendarRow.events = events
                .filter(event => event.room.id === room.id)
                .map((event) => {
                    const eventExtended = Object.assign(event);

                    eventExtended.dateEnd = new Date(event.dateEnd);
                    eventExtended.dateStart = new Date(event.dateStart);

                    return event;
                });

            calendar.push(calendarRow);

            return calendar;
        }, []);
    }

    findEventById(id) {
        return this._data.rooms
            .reduce((eventsArr, room) => {
                eventsArr.push(...room.events);

                return eventsArr;
            }, [])
            .find(event => event.id === id);
    }
}

module.exports = CalendarModel;
