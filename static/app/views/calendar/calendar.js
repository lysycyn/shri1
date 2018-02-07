const _ = require('lodash');

const View = require('../view');
const template = require('./calendar.mustache');

const utils = require('../../utils');

const { ONE_MINUTE_LENGTH_PERCENTS } = require('../../constants');

/**
 * Class representing a Calendar View
 */
class CalendarView extends View {
    /**
     * Create an instance.
     *
     * @param {Object} container - Container to render in
     * @param {Object} model - Model to represent
     */
    constructor(container, model) {
        super(template, container, model);

        this.update(model);
    }

    update(model) {
        super.update(model);

        const rows = this._model.rows.map((row) => {
            const rowExtended = Object.assign(row);
            rowExtended.roomCapacity = `${row.room.capacity} ${utils.plural(row.room.capacity, [
                'человек',
                'человека',
                'человек',
            ])}`;

            rowExtended.events = rowExtended.events.map((event) => {
                const { dateEnd, dateStart } = event;

                const durationMinutes = (dateEnd - dateStart) / 1000 / 60;
                const offsetMinutes = ((dateEnd.getHours() - 8) * 60) + dateEnd.getMinutes();

                const left = (offsetMinutes * ONE_MINUTE_LENGTH_PERCENTS).toFixed(3);
                const width = (durationMinutes * ONE_MINUTE_LENGTH_PERCENTS).toFixed(3);

                return {
                    id: event.id,
                    title: event.title,
                    left,
                    width,
                };
            });

            return rowExtended;
        });

        const floors = [];

        rows.map((row) => {
            if (floors.find(floor => floor.number === row.room.floor)) {
                floors.find(floor => floor.number === row.room.floor).rows.push(row);
            } else {
                floors.push({
                    number: row.room.floor,
                    rows: [],
                });
                floors.find(floor => floor.number === row.room.floor).rows.push(row);
            }
        });

        this._model.floors = floors.sort((a, b) => a.floor > b.floor);
    }

    _initListeners() {
        this._addEventListener('.js-tooltip-trigger', 'click', (e) => {
            e.stopPropagation();
            this._dispatcher.trigger('calendar-view:show-tooltip', e);
        });
    }
}

module.exports = CalendarView;
