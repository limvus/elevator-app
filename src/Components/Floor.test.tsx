import React from 'react';
import {shallow, ShallowWrapper} from "enzyme";

import Floor from "./Floor";

describe("Floor Tests", () => {
    test("render the floor", () => {
        let wrapper = shallow<ShallowWrapper>(<Floor floorCount={20} floorClickHandler={""} i={0}/>);
        expect(wrapper.text()).toEqual("Floor " + 20);
    });
});