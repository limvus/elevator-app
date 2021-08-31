import React from "react";
import Floor from "./Floor";

const FloorSection = (props: { floorCount: number, floorClickHandler: any }) => {
    const {floorCount} = props;

    return (
        <div className="app__floor-section">
            {
                Array.from(Array(floorCount), (_, i) => {
                    return <Floor key={i}  {...props} i={i}/>;
                })
            }
        </div>
    );
}

export default FloorSection;