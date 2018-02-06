const Controller = require('./controller');

const CalendarView = require('../views/calendar/calendar');
const CalendarModel = require('../models/calendar');

class CalendarController extends Controller {
    constructor(container, data) {
        super(CalendarModel, CalendarView, container, data);

        this.renderView();
        this._initListeners();
    }

    _initListeners() {
        this._dispatcher.on('calendar-view:edit-event', (id) => {
            const event = this._model.findEventById(id);
            console.log(event);
            this._dispatcher.trigger('calendar-controller:edit-event', event);
        });
    }
}

module.exports = CalendarController;
