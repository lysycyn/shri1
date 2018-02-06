const View = require('../view');
const template = require('./room.mustache');

/**
 * Class representing a Room View
 */
class RoomView extends View {
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
}

module.exports = RoomView;
