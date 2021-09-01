import Floor from "./Floor";

class FloorFactory {
    create(id: number): Floor {
        return new Floor(id);
    }

    createCollection(quantity: number): Floor[] {
        let collection = [];

        for (let i = 0; i < quantity; i++) {
            collection.push(this.create(i));
        }

        return collection;
    }
}

export default FloorFactory;