const Model = require('./model');

class DatePickerModel extends Model {
    constructor() {
        super();

        this._data.current = new Date();
    }

    incrementDay() {
        this._data.current.setDate(this._data.current.getDate() + 1);
    }

    decrementDay() {
        this._data.current.setDate(this._data.current.getDate() - 1);
    }
}

module.exports = DatePickerModel;
