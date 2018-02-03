const dispatcher = require('../dispatcher');

class Controller {
    constructor() {
        this._dispatcher = dispatcher;
    }
}

module.exports = Controller;
