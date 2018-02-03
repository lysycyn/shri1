const dispatcher = require('./dispatcher');

const CalendarController = require('./controllers/calendar');
const TimelineController = require('./controllers/timeline');
const DatePickerController = require('./controllers/date-picker');

const LAYOUT_CONTAINERS = {
    calendar: '.js-layout-body',
    dayPicker: '.js-layout-day-picker',
    timeline: '.js-layout-timeline',
};

class Mediator {
    constructor(appData) {
        const { rooms, events } = appData;

        this._dispatcher = dispatcher;

        const calendarEl = document.querySelector(LAYOUT_CONTAINERS.calendar);
        const dayPickerEl = document.querySelector(LAYOUT_CONTAINERS.dayPicker);
        const timelineEl = document.querySelector(LAYOUT_CONTAINERS.timeline);

        this._calendarController = new CalendarController(calendarEl, {
            rooms,
            events,
        });

        this._timelineController = new TimelineController(dayPickerEl, {});
        this._datePickerController = new DatePickerController(timelineEl, {});

        this.initListeners();
    }

    initListeners() {
        this._dispatcher.on('something', () => {});
    }
}

module.exports = Mediator;
