const View = require('../view');
const template = require('./calendar.mustache');

/**
 * Class representing a Calendar View
 */
class CalendarView extends View {
    /**
     * Create an instance.
     *
     * @param {Object} container - Container to render in
     * @param {Object} model - Model to represent
     */
    constructor(container, model) {
        super(template, container, model);

        console.log('MODEL:', model);
    }
}

module.exports = CalendarView;
