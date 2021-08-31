import classNames from "classnames";
import React from "react";

const Elevator = (props: { positions: number[]; i: number; }) => {
    const {positions, i} = props;
    const elevatorNumber = i + 1;
    const floorNumber = positions[i];

    return (
        <div
            style={{marginBottom: 20 * (floorNumber - 1)}}
            className={classNames(
                'app__elevator app__elevator-' + elevatorNumber,
                'app__elevator--floor-' + floorNumber
            )}
        >{'E' + elevatorNumber}</div>
    );
}

export default Elevator;