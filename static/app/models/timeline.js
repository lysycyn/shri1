const Model = require('./model');

class TimelineModel extends Model {
    constructor() {
        super();

        this._currentTime = new Date();
    }

    get currentTime() {
        return this._currentTime;
    }
}

module.exports = TimelineModel;
