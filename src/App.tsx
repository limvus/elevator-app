import React, {useState} from 'react';
import classNames from 'classnames';
import './App.css';

function App() {
    const [positions, setPositions] = useState([1, 1, 1]);

    const [elevatorCount] = useState(3);
    const [floorCount] = useState(20);
    const floorClickHandler = (e: React.MouseEvent, floorNo: number) => {
        let minDiff = Infinity;
        let index = 0;
        positions.forEach((value, i) => {
            let diff = Math.abs(floorNo - value);
            if (diff < minDiff) {
                minDiff = diff;
                index = i;
            }
        });

        let newPositions = positions.slice();
        newPositions[index] = floorNo;
        setPositions(newPositions);
    }

    return (
        <div className="app">
            <header className="app__header">
                <h1>Elevator App</h1>
            </header>

            <div className="app__content">
                <div className="app__elevator-section">
                    {
                        Array.from(Array(elevatorCount), (_, i) => {
                            return (
                                <div key={i} className="app__elevator-path">
                                    <div
                                        style={{marginBottom: 20 * (positions[i] - 1)}}
                                        className={classNames(
                                            "app__elevator app__elevator-" + (i + 1),
                                            "app__elevator--floor-" + positions[i]
                                        )}
                                    >{"E" + (i + 1)}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="app__floor-section">
                    {
                        Array.from(Array(floorCount), (_, i) => {
                            return (
                                <div key={i}
                                     className={"app__floor app__floor-" + (floorCount - i)}
                                     onClick={(e) => floorClickHandler(e, floorCount - i)}
                                >
                                    {"Floor " + (floorCount - i)}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
