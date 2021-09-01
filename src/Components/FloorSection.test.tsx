import React from 'react';
import {mount, ReactWrapper} from "enzyme";

import FloorSection from './FloorSection';
import {FloorFactory} from "../elevator-manager";

describe("FloorUnit Section Tests", () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
        let floors = (new FloorFactory()).createCollection(20);
        wrapper = mount(<FloorSection floors={floors} floorClickHandler={() => {
        }}/>);
    });

    test("render floors", () => {
        for (let i = 0; i < 20; i++) {
            expect(
                wrapper.find(".app__floor-section")
                    .find(".app__floor-" + i)
                    .text()
            ).toEqual("FloorUnit " + i);
        }
    });

    test("floor count start from bottom to top", () => {
        for (let i = 0; i < 20; i++) {
            let node = wrapper.find(".app__floor-section").find(".app__floor").at(i);
            expect(node.hasClass("app__floor-" + (19 - i))).toBeTruthy();
        }
    });
});