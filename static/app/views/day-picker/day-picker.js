const View = require('../view');
const template = require('./day-picker.mustache');

/**
 * Class representing a DayPicker View
 */
class DayPickerView extends View {
    /**
     * Create an instance.
     *
     * @param {Object} container - Container to render in
     * @param {Object} model - Model to represent
     */
    constructor(container, model) {
        super(template, container, model);
    }
}

module.exports = DayPickerView;
