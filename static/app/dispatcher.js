let {Mediator} = require('mediator-js/lib/mediator');

let dispatcher = new Mediator();

let dispatcherSingleton = () => {
    return dispatcher;
}

module.exports = dispatcherSingleton();
