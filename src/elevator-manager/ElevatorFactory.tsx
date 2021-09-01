import Elevator from "./Elevator";
import Floor from "./Floor";

class ElevatorFactory {
    create(id: number, initialFloor: Floor): Elevator {
        return new Elevator(id, initialFloor);
    }

    createCollection(quantity: number, initialFloor: Floor): Elevator[] {
        let collection = [];

        for (let i = 0; i < quantity; i++) {
            collection.push(this.create(i, initialFloor));
        }

        return collection;
    }
}

export default ElevatorFactory;