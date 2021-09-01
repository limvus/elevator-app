import {ElevatorFactory, FloorFactory} from "../elevator-manager";
import Elevator from "./Elevator";

describe("Elevator Factory Tests", () => {
    test("it can create new floor", () => {
        let floor = (new FloorFactory()).create(1);
        let elevator = (new ElevatorFactory()).create(1, floor);
        expect(elevator).toBeInstanceOf(Elevator);
        expect(elevator.getId()).toEqual(1);
    });

    test("it can create floor collection", () => {
        let floor = (new FloorFactory()).create(1);
        let elevators = (new ElevatorFactory()).createCollection(5, floor);
        expect(elevators.length).toEqual(5);
        expect(elevators[0]).toBeInstanceOf(Elevator);
    });
});