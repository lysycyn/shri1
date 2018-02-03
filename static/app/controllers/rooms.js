const Controller = require('./controller');

class RoomsController extends Controller {
    constructor(roomsModel) {
        super();

        this._roomsModel = roomsModel;
    }
}

module.exports = RoomsController;
