const Controller = require('./controller');

const TimelineModel = require('../models/timeline');
const TimelineView = require('../views/timeline/timeline');
const utils = require('../utils');

const { ONE_MINUTE_LENGTH_PERCENTS } = require('../constants');

class TimelineController extends Controller {
    constructor(container, data) {
        super(TimelineModel, TimelineView, container, data);
        this.setTime();
        //setInterval(this.setTime, 1000);
        this._view.render();
    }

    setTime() {
        const date = new Date();

        const time = utils.getTimeText(date);
        let left = 0;
        if (date.getHours() >= 8 || date.getHours() < 23) {
            const offsetMinutes = ((date.getHours() - 15) * 60) + date.getMinutes(); // поменять на 8
            // 3.125% - первый отступ до 8 утра, 24px - середина currentTime
            left = `calc(3.125% + ${(offsetMinutes * ONE_MINUTE_LENGTH_PERCENTS).toFixed(3)}% - 24px)`;
        }

        if (date.getHours() >= 23) {
            this._dispatcher.trigger('timeline-view:setDate');
        }
        this._model.setCurrentTime(time, left);
    }
}

module.exports = TimelineController;
