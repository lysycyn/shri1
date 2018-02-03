const dispatcher = require('./dispatcher');

const EventsController = require('./controllers/events');
const RoomsController = require('./controllers/rooms');
const TimelineController = require('./controllers/timeline');
const DatePickerController = require('./controllers/date-picker');

const EventsModel = require('./models/events');
const RoomsModel = require('./models/rooms');
const TimelineModel = require('./models/timeline');
const DatePickerModel = require('./models/date-picker');

class Mediator {
    constructor(appData) {
        const { rooms, events } = appData;

        this._dispatcher = dispatcher;

        const eventsModel = new EventsModel(events);
        const roomsModel = new RoomsModel(rooms);
        const timelineModel = new TimelineModel();
        const datePickerModel = new DatePickerModel();

        this._eventsController = new EventsController(eventsModel);
        this._roomsController = new RoomsController(roomsModel);
        this._timelineController = new TimelineController(timelineModel);
        this._datePickerController = new DatePickerController(datePickerModel);

        this.initListeners();
    }

    initListeners() {

    }
}

module.exports = Mediator;
