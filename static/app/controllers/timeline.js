const Controller = require('./controller');

const TimelineModel = require('../models/timeline');
const TimelineView = require('../views/timeline/timeline');

class TimelineController extends Controller {
    constructor(container, data) {
        super(TimelineModel, TimelineView, container, data);
    }
}

module.exports = TimelineController;
