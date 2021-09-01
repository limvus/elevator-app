import React from 'react';
import {mount, ReactWrapper} from "enzyme";

import ElevatorSection from './ElevatorSection';
import {ElevatorFactory, FloorFactory} from "../elevator-manager";

describe("ElevatorUnit Section Tests", () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
        let floor = (new FloorFactory()).create(0);
        let elevators = (new ElevatorFactory()).createCollection(20, floor);
        wrapper = mount(<ElevatorSection elevators={elevators}/>);
    });

    test("render elevators", () => {
        for (let i = 0; i < 3; i++) {
            expect(
                wrapper.find(".app__elevator-section")
                    .find(".app__elevator-path")
                    .find(".app__elevator-" + (i + 1))
                    .text()
            ).toEqual("E" + (i + 1));
        }
    })

    test("all elevators are on zero floor at the start", () => {
        for (let i = 0; i < 3; i++) {
            expect(
                wrapper.find(".app__elevator-section")
                    .find(".app__elevator-path")
                    .find(".app__elevator-" + (i))
                    .hasClass("app__elevator--floor-0")
            ).toBeTruthy();
        }
    });
});


