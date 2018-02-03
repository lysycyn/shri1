const Model = require('./model');

class RoomsModel extends Model {
    constructor(data) {
        super();
        
        this._rooms = data;
    }

    get rooms() {
        return this._rooms;
    }

    getRoomById(id) {

    }

    getRoomsByFloor(floor) {

    }

    getRoomsByCapacity(floor) {

    }
}

module.exports = RoomsModel;
