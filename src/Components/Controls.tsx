import React from "react";
import ElevatorManager from "../elevator-manager";

const Controls = (props: { elManager: ElevatorManager }) => {
    const {elManager} = props;
    return (
        <>
            <button className="app__footer--elevator-plus" onClick={() => elManager.addElevator()}>+</button>
            Elevator
            <button className="app__footer--elevator-minus" onClick={() => elManager.removeElevator()}>-</button>

            <button className="app__footer--floor-plus" onClick={() => elManager.addFloor()}>+</button>
            Floor
            <button className="app__footer--floor-minus" onClick={() => elManager.removeFloor()}>-</button>
        </>
    )
}

export default Controls;