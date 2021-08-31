import React from 'react';
import {mount, ReactWrapper} from "enzyme";

import ElevatorSection from './ElevatorSection';

describe("Elevator Section Tests", () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
        wrapper = mount(<ElevatorSection elevatorCount={3} positions={[1, 1, 1]}/>);
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

    test("all elevators are on first floor at the start", () => {
        for (let i = 0; i < 3; i++) {
            expect(
                wrapper.find(".app__elevator-section")
                    .find(".app__elevator-path")
                    .find(".app__elevator-" + (i + 1))
                    .hasClass("app__elevator--floor-1")
            ).toBeTruthy();
        }
    });
});


