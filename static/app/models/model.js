const dispatcher = require('../dispatcher');

class Model {
    constructor() {
        this._dispatcher = dispatcher;

        this._data = {};
    }

    get data() {
        return this._data;
    }
}

module.exports = Model;
