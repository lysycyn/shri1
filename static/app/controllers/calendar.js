const Controller = require('./controller');

const CalendarView = require('../views/calendar/calendar');
const CalendarModel = require('../models/calendar');

class CalendarController extends Controller {
    constructor(container, data) {
        super(CalendarModel, CalendarView, container, data);

        this.renderView();
    }
}

module.exports = CalendarController;
