const Controller = require('./controller');

class EventsController extends Controller {
    constructor(eventsModel) {
        super();

        this._eventsModel = eventsModel;
    }
}

module.exports = EventsController;
