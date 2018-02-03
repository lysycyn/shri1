const Controller = require('./controller');

class DatePickerController extends Controller {
    constructor(datePickerModel) {
        super();

        this._datePickerModel = datePickerModel;
    }
}

module.exports = DatePickerController;
