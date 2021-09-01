import React from "react";
import FloorUnit from "./FloorUnit";
import Floor from "../elevator-manager/Floor";

const FloorSection = (props: { floors: Floor[], floorClickHandler: (floor: Floor) => void }) => {
    const {floors, floorClickHandler} = props;

    return (
        <div className="app__floor-section">
            {
                floors.map((floor: Floor, i: number) => {
                   return <FloorUnit key={i} floor={floor} floorClickHandler={floorClickHandler}  />
                }).reverse()
            }
        </div>
    );
}

export default FloorSection;