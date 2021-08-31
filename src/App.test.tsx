import React from 'react';
import {shallow, ShallowWrapper} from "enzyme";

import App from './App';

describe("Render elements correctly", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<App/>);
    });

    test("render the app title", () => {
        expect(wrapper.find("h1").text()).toContain("Elevator App");
    });

    test("render the elevators", () => {
        for (let i = 0; i < 3; i++) {
            expect(
                wrapper.find(".app__elevator-section")
                    .find(".app__elevator-path")
                    .find(".app__elevator-" + (i + 1))
                    .text()
            ).toEqual("E" + (i + 1));
        }
    })

    test("render the floors", () => {
        for (let i = 0; i < 20; i++) {
            expect(
                wrapper.find(".app__floor-section")
                    .find(".app__floor-" + (i + 1))
                    .text()
            ).toEqual("Floor " + (i + 1));
        }
    });

    test("all elevators are at first floor at start", () => {
        for (let i = 0; i < 3; i++) {
            expect(
                wrapper.find(".app__elevator-section")
                    .find(".app__elevator-path")
                    .find(".app__elevator-" + (i + 1))
                    .hasClass("app__elevator--floor-1")
            ).toBeTruthy();
        }
    });

    test("floor count start from bottom to top", () => {
        wrapper.find(".app__floor-section").children()
            .forEach((node, i) => {
                expect(node.hasClass("app__floor-" + (20 - i))).toBeTruthy();
                expect(node.text()).toEqual("Floor " + (20 - i));
            });
    });
});


describe("elevators are functioning properly", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<App/>);
    });

   test("when floor is clicked nearest elevator is moved to the floor", () => {
       let elevator1;
       let elevator2;
       let elevator3;

       // when clicked on floor 20, the first elevator should move to the floor
       const floor20 = wrapper.find(".app__floor-20");
       floor20.simulate("click");
       elevator1= wrapper.find(".app__elevator-1");
       expect(elevator1.hasClass("app__elevator--floor-20")).toBeTruthy();
       // @ts-ignore
       expect(elevator1.prop('style').marginBottom).toEqual(20 * (20 - 1));

       // when clicked on floor 9, the second elevator should move to the floor
       const floor9 = wrapper.find(".app__floor-9");
       floor9.simulate("click");
       elevator2 = wrapper.find(".app__elevator-2");
       expect(elevator2.hasClass("app__elevator--floor-9")).toBeTruthy();
       // @ts-ignore
       expect(elevator2.prop('style').marginBottom).toEqual(20 * (9 - 1));

       // when clicked on floor 3, the third elevator should move to the floor
       const floor3 = wrapper.find(".app__floor-3");
       floor3.simulate("click");
       elevator3 = wrapper.find(".app__elevator-3");
       expect(elevator3.hasClass("app__elevator--floor-3")).toBeTruthy();
       // @ts-ignore
       expect(elevator3.prop('style').marginBottom).toEqual(20 * (3 - 1));

       // when clicked on floor 15, the first elevator should move to the floor
       const floor15 = wrapper.find(".app__floor-15");
       floor15.simulate("click");
       elevator1 = wrapper.find(".app__elevator-1");
       expect(elevator1.hasClass("app__elevator--floor-15")).toBeTruthy();
       // @ts-ignore
       expect(elevator1.prop('style').marginBottom).toEqual(20 * (15 - 1));

       // when clicked on floor 8, the second elevator should move to the floor
       const floor8 = wrapper.find(".app__floor-8");
       floor8.simulate("click");
       elevator2 = wrapper.find(".app__elevator-2");
       expect(elevator2.hasClass("app__elevator--floor-8")).toBeTruthy();
       // @ts-ignore
       expect(elevator2.prop('style').marginBottom).toEqual(20 * (8 - 1));

       // when clicked on floor 5, the third elevator should move to the floor
       const floor5 = wrapper.find(".app__floor-5");
       floor5.simulate("click");
       elevator3 = wrapper.find(".app__elevator-3");
       expect(elevator3.hasClass("app__elevator--floor-5")).toBeTruthy();
       // @ts-ignore
       expect(elevator3.prop('style').marginBottom).toEqual(20 * (5 - 1));
   });
});
