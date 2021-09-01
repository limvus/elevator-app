import React from 'react';
import {shallow, ShallowWrapper} from "enzyme";
import ElevatorManager, {ElevatorFactory, FloorFactory} from "../elevator-manager";
import Controls from "./Controls";

const floors = (new FloorFactory()).createCollection(2);
const elevators = (new ElevatorFactory()).createCollection(2, floors[0]);
const INITIAL_STATE = {
    floors: floors,
    elevators: elevators
}

describe("Controls Test", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Controls elManager={new ElevatorManager(INITIAL_STATE, () => {})}/>);
    });

    test("renders plus elevator button", () => {
        expect(wrapper.find(".app__footer--elevator-plus").text()).toEqual("+");
    });

    test("renders minus elevator button", () => {
        expect(wrapper.find(".app__footer--elevator-minus").text()).toEqual("-");
    });

    test("renders plus floor button", () => {
        expect(wrapper.find(".app__footer--floor-plus").text()).toEqual("+");
    });

    test("renders minus floor button", () => {
        expect(wrapper.find(".app__footer--floor-minus").text()).toEqual("-");
    });
});


