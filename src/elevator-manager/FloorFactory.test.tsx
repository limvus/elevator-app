import {FloorFactory} from "../elevator-manager";
import Floor from "./Floor";

describe("Floor Factory Tests", () => {
    test("it can create new floor", () => {
        let floor = (new FloorFactory()).create(1);
        expect(floor).toBeInstanceOf(Floor);
        expect(floor.getId()).toEqual(1);
    });

    test("it can create floor collection", () => {
        let floors = (new FloorFactory()).createCollection(5);
        expect(floors.length).toEqual(5);
        expect(floors[0]).toBeInstanceOf(Floor);
    });
});