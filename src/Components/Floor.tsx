import React from "react";

const Floor = (props: { floorCount: number; i: number; floorClickHandler: any; }) => {
    const {floorCount, i, floorClickHandler} = props;
    const floorNumber = floorCount - i;

    return (
        <div key={floorNumber}
             className={"app__floor app__floor-" + floorNumber}
             onClick={() => floorClickHandler(floorNumber)}
        >
            {"Floor " + floorNumber}
        </div>
    );
}

export default Floor;