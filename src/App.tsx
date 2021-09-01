import React, {useState} from 'react';
import './App.css';
import ElevatorManager, {FloorFactory, ElevatorFactory} from "./elevator-manager";
import ElevatorSection from "./Components/ElevatorSection";
import FloorSection from "./Components/FloorSection";
import Floor from "./elevator-manager/Floor";
import Controls from "./Components/Controls";

const floors = (new FloorFactory()).createCollection(20);
const elevators = (new ElevatorFactory()).createCollection(3, floors[0]);
const INITIAL_STATE = {
    floors: floors,
    elevators: elevators
}

const App = () => {
    const [state, setState] = useState(INITIAL_STATE);
    const elManager = new ElevatorManager(state, setState);

    return (
        <div className="app">
            <header className="app__header">
                <h1>Elevator App</h1>
            </header>

            <div className="app__content">
                <ElevatorSection
                    elevators={elManager.getElevators()}
                />
                <FloorSection
                    floors={elManager.getFloors()}
                    floorClickHandler = {(floor: Floor) => elManager.callNearestElevator(floor)}
                />
            </div>

            <div className="app__footer">
                <Controls elManager={elManager}/>
            </div>
        </div>
    );
}

export default App;
