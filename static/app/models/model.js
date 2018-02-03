const dispatcher = require('../dispatcher');

class Model {
    constructor() {
        this._dispatcher = dispatcher;
    }
}

module.exports = Model;
