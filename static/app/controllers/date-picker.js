const Controller = require('./controller');

const DatePickerModel = require('../models/date-picker');
const DatePickerView = require('../views/date-picker/date-picker');

class DatePickerController extends Controller {
    constructor(container, data) {
        super(DatePickerModel, DatePickerView, container, data);

        this._view.render();
    }

    initListeners() {
        this._dispatcher.on('date-picker-view:next', () => {
            this.nextDay();
        });

        this._dispatcher.on('date-picker-view:previous', () => {
            this.previousDay();
        });
    }

    nextDay() {
        this._model.incrementDay();

        this.updateViewByModel();
        this.renderView();
    }

    previousDay() {
        this._model.decrementDay();

        this.updateViewByModel();
        this.renderView();
    }
}

module.exports = DatePickerController;
