const Controller = require('./controller');

class TimelineController extends Controller {
    constructor(timelineModel) {
        super();

        this._timelineModel = timelineModel;
    }
}

module.exports = TimelineController;
