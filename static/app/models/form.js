const _ = require('lodash');

const Model = require('./model');

/**
 * Class representing a Form Model.
 */
class FormModel extends Model {
    constructor() {
        super();
        this._data.event = {};
    }

    update(event) {
        this._data.event = _.cloneDeep(event);
    }
}

module.exports = FormModel;
