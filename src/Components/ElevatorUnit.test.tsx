import React from 'react';
import {shallow, ShallowWrapper} from "enzyme";
import ElevatorUnit from "./ElevatorUnit";
import {ElevatorFactory, FloorFactory} from "../elevator-manager";

describe("ElevatorUnit tests", () => {
    test("render elevator", () => {
        const floor = (new FloorFactory()).create(0);
        const elevator = (new ElevatorFactory()).create(0, floor);
        const wrapper = shallow<ShallowWrapper>(<ElevatorUnit elevator={elevator}/>);
        expect(wrapper.find(".app__elevator-" + 0).text()).toEqual("E" + 0);
    });
});


