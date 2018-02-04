const View = require('../view');
const template = require('./calendar.mustache');

const utils = require('../../utils');

const CALENDAR_TIMLINE_MINUTES = 900;
const ONE_MINUTE_LENGTH_PERCENTS = 100 / CALENDAR_TIMLINE_MINUTES;

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
    }

    update(model) {
        super.update(model);

        this._model.rooms = this._model.rooms.map((room) => {
            const roomExtended = Object.assign(room);

            roomExtended.events = roomExtended.events.map((event) => {
                const { dateEnd, dateStart, users } = event;

                const durationMinutes = (dateEnd - dateStart) / 1000 / 60;
                const offsetMinutes = ((dateEnd.getHours() - 8) * 60) + dateEnd.getMinutes();

                const left = (offsetMinutes * ONE_MINUTE_LENGTH_PERCENTS).toFixed(3);
                const width = (durationMinutes * ONE_MINUTE_LENGTH_PERCENTS).toFixed(3);

                const dateText = utils.getDateText(dateStart);
                const startTimeText = utils.getTimeText(dateStart);
                const endTimeText = utils.getTimeText(dateEnd);
                const participantName = users[0].login;

                const participantsPlural = utils.plural(users.length - 1, [
                    'участник',
                    'участника',
                    'участников',
                ]);

                const participantsCountText = `и ещё ${users.length - 1} ${participantsPlural}`;

                return {
                    id: event.id,
                    title: event.title,
                    left,
                    width,
                    dateText,
                    startTimeText,
                    endTimeText,
                    participantName,
                    participantsCountText,
                };
            });

            return roomExtended;
        });
    }

    toggleTooltip() {
      document.querySelectorAll('.js-tooltip-trigger').addEventListener('click', () => {

      });
    }
}

module.exports = CalendarView;
