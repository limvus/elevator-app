import Floor from "./Floor";

class Elevator {
    constructor(
        private id: number,
        private floor: Floor
    ) {}

    getId(): number {
        return this.id;
    }

    getFloor(): Floor {
        return this.floor;
    }

    setFloor(floor: Floor) {
        this.floor = floor;
    }
}

export default Elevator;