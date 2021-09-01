import Floor from "./Floor";

describe("Floor Tests", () => {
    let floor: Floor;

    beforeEach(() => {
        floor = new Floor(0);
    });

    test("it has id", () => {
        expect(floor.getId()).toEqual(0);
    });
});