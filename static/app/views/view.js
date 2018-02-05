const dispatcher = require('../dispatcher');

class View {
    /**
     * Create an instance.
     *
     * @param {Object} template - Template to render
     * @param {Object} model - Model to represent
     * @param {Object} container - Container to render in
     */
    constructor(template, container, model) {
        this._dispatcher = dispatcher;

        this._template = template;
        this._container = container;

        this.update(model);
    }

    update(model) {
        this._model = model;
    }

    _addEventListener(selector, event, callback) {
        document.querySelectorAll(selector).forEach((element) => {
            element.addEventListener(event, callback);
        });
    }

    /**
     * Abstract Interface. Will be implemented in subclasses
     */
    _initListeners() {}

    render() {
        this._container.innerHTML = this._template(this._model);

        this._initListeners();
    }
}

module.exports = View;
