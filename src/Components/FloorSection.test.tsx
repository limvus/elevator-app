import React from 'react';
import {mount, ReactWrapper} from "enzyme";

import FloorSection from './FloorSection';

describe("Floor Section Tests", () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
        wrapper = mount(<FloorSection floorCount={20} floorClickHandler={""}/>);
    });

    test("render floors", () => {
        for (let i = 0; i < 20; i++) {
            expect(
                wrapper.find(".app__floor-section")
                    .find(".app__floor-" + (i + 1))
                    .text()
            ).toEqual("Floor " + (i + 1));
        }
    });

    test("floor count start from bottom to top", () => {
        wrapper.find(".app__floor-section").find(".app__floor")
            .forEach((node, i) => {
                expect(node.hasClass("app__floor-" + (20 - i))).toBeTruthy();
                expect(node.text()).toEqual("Floor " + (20 - i));
            });
    });
});