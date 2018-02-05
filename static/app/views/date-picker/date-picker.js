const View = require('../view');
const template = require('./date-picker.mustache');

const utils = require('../../utils');

/**
 * Class representing a DayPicker View
 */
class DatePickerView extends View {
    /**
     * Create an instance.
     *
     * @param {Object} container - Container to render in
     * @param {Object} model - Model to represent
     */
    constructor(container, model) {
        super(template, container, model);

        this._model.currentDateText = utils.getDateText(this._model.current, true);

        const currentWeekDay = utils.getWeekDayText(this._model.current, true);
        const closnessText = utils.getDateClosenessText(this._model.current);

        this._model.currentWeekDay = closnessText || currentWeekDay;
    }

    _initListeners() {
        this._addEventListener('.js-previous-day', 'click', () => {
            this._dispatcher.trigger('date-picker-view:previous-day');
        });

        this._addEventListener('.js-next-day', 'click', () => {
            this._dispatcher.trigger('date-picker-view:next-day');
        });
    }
}

module.exports = DatePickerView;
