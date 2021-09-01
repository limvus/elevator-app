import Elevator from "./Elevator";
import Floor from "./Floor";

describe("Elevator Tests", () => {
    let elevator: Elevator;

    beforeEach(() => {
        let floor = new Floor(0);
        elevator = new Elevator(0, floor);
    });

    test("it has id", () => {
        expect(elevator.getId()).toEqual(0);
    });

    test("it has floor", () => {
        expect(elevator.getFloor()).toBeInstanceOf(Floor);
    });

    test("floor can be set", () => {
        let floor = new Floor(1);
        elevator.setFloor(floor);
        expect(elevator.getFloor().getId()).toEqual(1);
    });
});