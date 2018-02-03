const Model = require('./model');

class DatePickerModel extends Model {
    constructor() {
        super();

        this._currentDate = new Date();
    }

    get currentDate() {
        return this._currentDate;
    }

    set currentDate(date) {
        return this._currentDate = date;
    }
}

module.exports = DatePickerModel;
