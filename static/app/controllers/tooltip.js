const Controller = require('./controller');

const TooltipModel = require('../models/tooltip');
const TooltipView = require('../views/tooltip/tooltip');

const utils = require('../utils.js');

class TooltipController extends Controller {
    constructor(containers, data) {
        super(TooltipModel, TooltipView, containers, data);
    }

    showTooltip(e, event) {
        console.log(e);
        console.log(event);

        const {
            title,
            users,
            dateStart,
            dateEnd,
            room,
        } = event;
        const dateText = utils.getDateText(dateStart);
        const startTimeText = utils.getTimeText(dateStart);
        const endTimeText = utils.getTimeText(dateEnd);
        const participantName = users[0].login;
        const participantAvatar = users[0].avatarUrl;

        const participantsPlural = utils.plural(users.length - 1, [
            'участник',
            'участника',
            'участников',
        ]);

        const participantsCountText = `и ещё ${users.length - 1} ${participantsPlural}`;


        this.updateModel({
            title,
            room,
            dateText,
            startTimeText,
            endTimeText,
            participantName,
            participantAvatar,
            participantsCountText,
        });
        this.updateViewByModel();
        this.renderView();
        this.viewToggleVisible();
    }
}

module.exports = TooltipController;
