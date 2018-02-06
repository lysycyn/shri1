const View = require('../view');
const template = require('./header.mustache');

/**
 * Class representing a Header View
 */
class HeaderView extends View {
    /**
     * Create an instance.
     *
     * @param {Object} container - Container to render in
     * @param {Object} model - Model to represent
     */
    constructor(container, model) {
        super(template, container, model);
    }

    _initListeners() {
        this._addEventListener('.js-create-event', 'click', () => {
            console.log(1);
            this._dispatcher.trigger('header-view:create-event');
        });
    }
}

module.exports = HeaderView;
