module.exports = {

    /** Events request */

    events: `{
        events {
            id
            title
            dateStart
            dateEnd
            users {
                id
                login
                homeFloor
                avatarUrl
            }
            room {
                id
                title
                capacity
                floor
            }
        }
    }`,

    /* Rooms request */

    rooms: `{
        rooms {
            id
            title
            capacity
            floor
        }
    }`,
};
