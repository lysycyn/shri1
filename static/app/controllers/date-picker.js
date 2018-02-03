const Controller = require('./controller');

const DatePickerModel = require('../models/date-picker');
const DatePickerView = require('../views/day-picker/day-picker');

class DatePickerController extends Controller {
    constructor(container, data) {
        super(DatePickerModel, DatePickerView, container, data);
    }
}

module.exports = DatePickerController;
