import React from 'react';
import {shallow, ShallowWrapper} from "enzyme";
import Elevator from "./Elevator";

describe("Elevator tests", () => {
    test("render elevator", () => {
        const wrapper = shallow<ShallowWrapper>(<Elevator positions={[1, 1, 1]} i={0}/>);
        expect(wrapper.find(".app__elevator-" + 1).text()).toEqual("E" + 1);
    });
});


