import React, {useState} from 'react';
import './App.css';
import ElevatorSection from "./Components/ElevatorSection";
import FloorSection from "./Components/FloorSection";

const App = () => {
    // total elevators count
    // by default, there are three elevators
    const [elevatorCount] = useState(3);

    // total floors count
    // by default, there are 20 floors
    const [floorCount] = useState(20);

    // floor positions of all elevators
    // by default, all elevators are in the first floor
    const [positions, setPositions] = useState([1, 1, 1]);

    // Update elevator destination to clicked floor
    const floorClickHandler = (floorNo: number) => {
        let minDiff = Infinity;
        let nearestElevatorIndex = 0;

        // get the index of nearest elevator
        positions.forEach((elevatorCurrentPosition, elevatorIndex) => {
            let diff = Math.abs(floorNo - elevatorCurrentPosition);
            if (diff < minDiff) {
                minDiff = diff;
                nearestElevatorIndex = elevatorIndex;
            }
        });

        // set nearest elevator to current floor
        let newPositions = positions.slice();
        newPositions[nearestElevatorIndex] = floorNo;
        setPositions(newPositions);
    }

    // props for elevator section
    const elevatorSectionProps = {
        elevatorCount,
        positions
    };

    // props for floor section
    const floorSectionProps = {
        floorCount,
        floorClickHandler
    }

    return (
        <div className="app">
            <header className="app__header">
                <h1>Elevator App</h1>
            </header>

            <div className="app__content">
                <ElevatorSection {...elevatorSectionProps}/>
                <FloorSection {...floorSectionProps} />
            </div>
        </div>
    );
}

export default App;
