import React from "react";
import Floor from "../elevator-manager/Floor";

const FloorUnit = (props: { floor: Floor, floorClickHandler: (floor: Floor) => void }) => {
    const {floor, floorClickHandler} = props;
    const floorNumber = floor.getId();

    return (
        <div key={floorNumber}
             className={"app__floor app__floor-" + floorNumber}
             onClick={() => floorClickHandler(floor)}
        >
            {"FloorUnit " + floorNumber}
        </div>
    );
}

export default FloorUnit;