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

        this.update(data);
    }

    update(data) {
        super.update(data);

        this._data.rooms = this._data.rooms.reduce((calendar, room) => {
            const calendarRow = {
                room,
                events: [],
            };

            calendarRow.events = this._data.events
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
