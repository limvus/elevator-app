import React from 'react'
import Elevator from '../elevator-manager/Elevator';
import ElevatorUnit from "./ElevatorUnit";

const ElevatorSection = (props: { elevators: Elevator[] }) => {
    const {elevators} = props;

    return (
        <div className="app__elevator-section">
            {
                elevators.map((elevator: Elevator) => {
                    return (
                        <div key={elevator.getId()} className="app__elevator-path">
                            <ElevatorUnit elevator={elevator}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ElevatorSection;