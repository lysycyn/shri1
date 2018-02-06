const Controller = require('./controller');

const FormModel = require('../models/form');
const FormView = require('../views/form/form');

class FormController extends Controller {
    constructor(container, data) {
        super(FormModel, FormView, container, data);
        this.renderView();
    }

    showForm(event = null) {
        this._model.update(event);
        this.updateViewByModel();
        this.renderView();
        this._views.map(view => view.toggleVisible());
    }
}

module.exports = FormController;
