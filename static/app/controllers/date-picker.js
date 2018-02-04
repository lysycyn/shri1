const Controller = require('./controller');

const DatePickerModel = require('../models/date-picker');
const DatePickerView = require('../views/date-picker/date-picker');

class DatePickerController extends Controller {
    constructor(container, data) {
        super(DatePickerModel, DatePickerView, container, data);

        this._view.render();

        this._initListeners();
    }

    _initListeners() {
        this._dispatcher.on('date-picker-view:next-day', () => {
            this._nextDay();
        });

        this._dispatcher.on('date-picker-view:previous-day', () => {
            this._previousDay();
        });
    }

    _nextDay() {
        this._model.incrementDay();

        this.updateViewByModel();
        this.renderView();
    }

    _previousDay() {
        this._model.decrementDay();

        this.updateViewByModel();
        this.renderView();
    }
}

module.exports = DatePickerController;
