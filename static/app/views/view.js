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
        this._model = model;
        this._container = container;
    }

    render() {
        this._container.innerHTML = this._template(this._model);
    }
}

module.exports = View;
