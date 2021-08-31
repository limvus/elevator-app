import React from 'react'
import Elevator from "./Elevator";

const ElevatorSection = (props: { elevatorCount: number; positions: number[] }) => {
    const {elevatorCount} = props;

    return (
        <div className="app__elevator-section">
            {
                Array.from(Array(elevatorCount), (_, i) => {
                    return (
                        <div key={i} className="app__elevator-path">
                            <Elevator  {...props} i={i}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ElevatorSection;