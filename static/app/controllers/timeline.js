const Controller = require('./controller');

const TimelineModel = require('../models/timeline');
const TimelineView = require('../views/timeline/timeline');

const utils = require('../utils');

const { ONE_MINUTE_LENGTH_PERCENTS } = require('../constants');

class TimelineController extends Controller {
    constructor(container, data) {
        super(TimelineModel, TimelineView, container, data);
        setInterval(() => this.setTime(), 60000);
        this.renderView();
    }

    setTime() {

        const date = this._model.currentTime;

        let offset = 0;
        if (date.getHours() >= 8 || date.getHours() < 23) {
            const offsetMinutes = ((date.getHours() - 8) * 60) + date.getMinutes(); // поменять на 8
            // 3.125% - первый отступ до 8 утра, 24px - середина currentTime
            offset = `calc(3.125% + ${(offsetMinutes * ONE_MINUTE_LENGTH_PERCENTS).toFixed(3)}% - 24px)`;
        }

        if (date.getHours() >= 23) {
            this._dispatcher.trigger('timeline-controller:setTime');
        }

        this._model.currentTime = utils.getTimeText(date);
        this._model.currentTimeOffset = offset;

        this.updateViewByModel();
        this.renderView();
    }
}

module.exports = TimelineController;
