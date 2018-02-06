const dispatcher = require('../dispatcher');

class Controller {
    constructor(ModelClass, ViewClass, containers, data) {
        this._dispatcher = dispatcher;

        this._containers = containers;

        this._model = new ModelClass(data);

        this._views = [];

        for (let i = 0; i < containers.length; i++) {
            this._views.push(new ViewClass(containers[i], this._model.data));
        }
    }

    updateViewByModel() {
        this._views.map(view => view.update(this._model.data));
    }

    renderView() {
        this._views.map(view => view.render());
    }
}

module.exports = Controller;


//
// const dispatcher = require('../dispatcher');
//
// class Controller {
//     constructor(ModelClass, ViewClass, containers, data) {
//         this._dispatcher = dispatcher;
//
//         this._containers = containers;
//
//         this._model = new ModelClass(data);
//
//         this._view = this._containers.map((container) => {
//           return new ViewClass(container, this._model.data);
//         } )
//         // this._view = new ViewClass(this._container, this._model.data);
//     }
//
//     updateViewByModel() {
//         this._view.update(this._model.data);
//     }
//
//     renderView() {
//         this._view.render();
//     }
// }
//
// module.exports = Controller;
