const Controller = require('./controller');

const TimelineModel = require('../models/timeline');
const TimelineView = require('../views/timeline/timeline');

class TimelineController extends Controller {
    constructor(container, data) {
        super(TimelineModel, TimelineView, container, data);
        setInterval(this.setTime, 1000);
        this.renderView();
    }

    setTime() {
        this._model.setCurrentTime();
        console.log(this._model);
        this.updateViewByModel();
        this.renderView();
    }
}

module.exports = TimelineController;
