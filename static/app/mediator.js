const dispatcher = require('./dispatcher');

const CalendarController = require('./controllers/calendar');
const TimelineController = require('./controllers/timeline');
const DatePickerController = require('./controllers/date-picker');

const LAYOUT_CONTAINERS = {
    calendar: '.js-layout-calendar',
    dayPicker: '.js-layout-date-picker',
    timeline: '.js-layout-timeline',
};

class Mediator {
    constructor(appData) {
        const { rooms, events } = appData;

        this._dispatcher = dispatcher;

        const calendarElems = document.querySelectorAll(LAYOUT_CONTAINERS.calendar);
        const dayPickerElems = document.querySelectorAll(LAYOUT_CONTAINERS.dayPicker);
        const timelineElems = document.querySelectorAll(LAYOUT_CONTAINERS.timeline);

        this._calendarController = new CalendarController(calendarElems, {
            rooms,
            events,
        });

        this._datePickerController = new DatePickerController(dayPickerElems, {});
        this._timelineController = new TimelineController(timelineElems, {});

        this.initListeners();
    }

    initListeners() {
        this._dispatcher.on('something', () => {});
    }
}

module.exports = Mediator;
