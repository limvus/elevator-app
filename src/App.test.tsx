import React from 'react';
import {shallow, ShallowWrapper} from "enzyme";

import App from './App';

describe("Smoke test", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<App/>);
    });

    test("render the app title", () => {
        expect(wrapper.find("h1").text()).toContain("Elevator App");
    });

    test("render the elevators", () => {
        expect(
            wrapper.find(".app__elevator-section")
                .children()
                .find(".app__elevator").length
        ).toEqual(3);
    })

    test("render the floors", () => {
        expect(
            wrapper.find(".app__floor-section")
                .children()
                .find(".app__floor").length
        ).toEqual(20);
    });
});
