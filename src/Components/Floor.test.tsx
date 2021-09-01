import React from 'react';
import {shallow, ShallowWrapper} from "enzyme";

import FloorUnit from "./FloorUnit";
import {FloorFactory} from "../elevator-manager";

describe("FloorUnit Tests", () => {
    test("render the floor", () => {
        let floor = (new FloorFactory()).create(0);
        let wrapper = shallow<ShallowWrapper>(<FloorUnit floor={floor} floorClickHandler={() => {}} />);
        expect(wrapper.text()).toEqual("FloorUnit " + 0);
    });
});