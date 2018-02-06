const View = require('../view');
const template = require('./form.mustache');

/**
 * Class representing a Form View
 */
class FormView extends View {
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

    toggleVisible() {
        const form = document.querySelector('.js-form');
        if (form.classList.contains('form_visible')) {
            form.classList.remove('form_visible');
        } else {
            form.classList.add('form_visible');
        }
    }

    _initListeners() {
        this._addEventListener('.js-form-close', 'click', () => {
            this.toggleVisible();
            this._dispatcher.trigger('form-view:form-close');
        });
    }
}

module.exports = FormView;
