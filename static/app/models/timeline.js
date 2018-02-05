const Model = require('./model');
const utils = require('../utils');

class TimelineModel extends Model {
    constructor() {
        super();
        this._data.currentTime = utils.getTimeText(new Date());
        this._data.currentTimeOffset = 0;
    }

    setCurrentTime(time, left) {
        this._data.currentTime = time;
        this._data.currentTimeOffset = left;
    }
}

module.exports = TimelineModel;
