const View = require('../view');
const template = require('./timeline.mustache');

/**
 * Class representing a Timeline View
 */
class TimelineView extends View {
    /**
     * Create an instance.
     *
     * @param {Object} container - Container to render in
     * @param {Object} model - Model to represent
     */
    constructor(container, model) {
        super(template, container, model);
    }
}

module.exports = TimelineView;
