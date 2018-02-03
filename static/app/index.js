const API = require('./api');
const Mediator = require('./mediator');

(() => {
    const api = new API();

    Promise.all([
        api.fetchRooms(),
        api.fetchEvents(),
    ]).then((results) => {
        const appData = results.reduce(
            (prev, curr) => Object.assign(prev, curr),
            {},
        );

        return new Mediator(appData);
    });
})();
