import React from 'react';
import {mount, ReactWrapper, shallow, ShallowWrapper} from "enzyme";

import App from './App';

describe("Hello App", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<App/>);
    });

    test("render the app title", () => {
        expect(wrapper.find("h1").text()).toContain("Elevator App");
    });
});

describe("ElevatorUnit is functioning properly", () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
        wrapper = mount(<App />);
    });

    test("when floor is clicked nearest elevator is moved to the floor", () => {
        let elevator0;
        let elevator1;
        let elevator2;

        // when clicked on floor 19, the elevator 0 should move to the floor
        const floor19 = wrapper.find(".app__floor-19");
        floor19.simulate("click");
        elevator0= wrapper.find(".app__elevator-0");
        expect(elevator0.hasClass("app__elevator--floor-19")).toBeTruthy();
        // @ts-ignore
        expect(elevator0.prop('style').marginBottom).toEqual(20 * 19);

        // when clicked on floor 9, the elevator 1 should move to the floor
        const floor9 = wrapper.find(".app__floor-9");
        floor9.simulate("click");
        elevator1 = wrapper.find(".app__elevator-1");
        expect(elevator1.hasClass("app__elevator--floor-9")).toBeTruthy();
        // @ts-ignore
        expect(elevator1.prop('style').marginBottom).toEqual(20 * 9);

        // when clicked on floor 3, the elevator 2 should move to the floor
        const floor3 = wrapper.find(".app__floor-3");
        floor3.simulate("click");
        elevator2 = wrapper.find(".app__elevator-2");
        expect(elevator2.hasClass("app__elevator--floor-3")).toBeTruthy();
        // @ts-ignore
        expect(elevator2.prop('style').marginBottom).toEqual(20 * 3);

        // when clicked on floor 15, the elevator 0 should move to the floor
        const floor15 = wrapper.find(".app__floor-15");
        floor15.simulate("click");
        elevator0 = wrapper.find(".app__elevator-0");
        expect(elevator0.hasClass("app__elevator--floor-15")).toBeTruthy();
        // @ts-ignore
        expect(elevator0.prop('style').marginBottom).toEqual(20 * 15);

        // when clicked on floor 8, the elevator 1 should move to the floor
        const floor8 = wrapper.find(".app__floor-8");
        floor8.simulate("click");
        elevator1 = wrapper.find(".app__elevator-1");
        expect(elevator1.hasClass("app__elevator--floor-8")).toBeTruthy();
        // @ts-ignore
        expect(elevator1.prop('style').marginBottom).toEqual(20 * 8);

        // when clicked on floor 5, the elevator 2 should move to the floor
        const floor5 = wrapper.find(".app__floor-5");
        floor5.simulate("click");
        elevator2 = wrapper.find(".app__elevator-2");
        expect(elevator2.hasClass("app__elevator--floor-5")).toBeTruthy();
        // @ts-ignore
        expect(elevator2.prop('style').marginBottom).toEqual(20 * 5);
    });
});
