const Controller = require('./controller');

const DatePickerModel = require('../models/date-picker');
const DatePickerView = require('../views/date-picker/date-picker');

class DatePickerController extends Controller {
    constructor(container, data) {
        super(DatePickerModel, DatePickerView, container, data);

        this._view.render();
    }

    nextDay() {
        this._model.incrementDay();
    }

    previousDay() {
        this._model.decrementDay();
    }
}

module.exports = DatePickerController;
