const dispatcher = require('../dispatcher');

class Controller {
    constructor(ModelClass, ViewClass, container, data) {
        this._dispatcher = dispatcher;

        this._container = container;

        this._model = new ModelClass(data);
        this._view = new ViewClass(this._container, this._model.data);
    }

    updateViewByModel() {
        this._view.update(this._model.data);
    }

    renderView() {
        this._view.render();
    }
}

module.exports = Controller;
