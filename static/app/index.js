const API = require('./api');
const Mediator = require('./mediator');

(() => {
    const api = new API();

    Promise.all([
        api.fetchRooms(),
        api.fetchEvents(new Date()),
    ]).then((results) => {
        const appData = results.reduce(
            (prev, curr) => Object.assign(prev, curr),
            {},
        );

        return new Mediator(appData);
    });
})();
