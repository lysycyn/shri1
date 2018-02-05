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

        this.update(model);
    }

    update(model) {
        super.update(model);

        this._model.currentDateText = utils.getDateText(this._model.current, true);

        const currentWeekDay = utils.getWeekDayText(this._model.current, true);
        const closnessText = utils.getDateClosenessText(this._model.current);

        this._model.currentWeekDay = closnessText || currentWeekDay;
    }

    _initListeners() {
<<<<<<< HEAD
        this._addEventListener('.js-previous-day', 'click', () => {
            this._dispatcher.trigger('date-picker-view:previous-day');
        });

        this._addEventListener('.js-next-day', 'click', () => {
=======
        const previousDayElement = document.querySelector('.js-previous-day');
        const nextDayElement = document.querySelector('.js-next-day');

        previousDayElement.addEventListener('click', () => {
            this._dispatcher.trigger('date-picker-view:previous-day');
        });

        nextDayElement.addEventListener('click', () => {
>>>>>>> 9f920d48d477d88fbaf76b3ff687006fa1243d2d
            this._dispatcher.trigger('date-picker-view:next-day');
        });
    }
}

module.exports = DatePickerView;
