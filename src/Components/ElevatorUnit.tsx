import classNames from "classnames";
import React from "react";
import Elevator from "../elevator-manager/Elevator";

const ElevatorUnit = (props: { elevator: Elevator; }) => {
    const {elevator} = props;
    const elevatorNumber = elevator.getId();
    const floorNumber = elevator.getFloor().getId();

    return (
        <div
            style={{marginBottom: 20 * (floorNumber)}}
            className={classNames(
                'app__elevator app__elevator-' + elevatorNumber,
                'app__elevator--floor-' + floorNumber
            )}
        >{'E' + elevatorNumber}</div>
    );
}

export default ElevatorUnit;