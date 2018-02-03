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

            calendarRow.events = events.filter(x => x.room.id === room.id);

            calendar.push(calendarRow);

            return calendar;
        }, []);
    }
}

module.exports = CalendarModel;
