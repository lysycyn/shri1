const Model = require('./model');

class EventsModel extends Model {
    constructor(data) {
        super();
        
        this._events = data;
    }

    get events() {
        return this._events;
    }

    editEvent(id) {

    }

    addEvent(event) {

    }

    getEventById(id) {

    }

    getEventsByRoom(room) {

    }
}

module.exports = EventsModel;
