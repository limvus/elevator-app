import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app">
            <header className="app__header">
                <h1>Elevator App</h1>
            </header>

            <div className="app__content">
                <div className="app__elevator-section">
                    <div className="app__elevator-path">
                        <div className="app__elevator app__elevator--1">E1</div>
                    </div>
                    <div className="app__elevator-path app__elevator--2">
                        <div className="app__elevator">E2</div>
                    </div>
                    <div className="app__elevator-path app__elevator--3">
                        <div className="app__elevator">E3</div>
                    </div>
                </div>
                <div className="app__floor-section">
                    <div className="app__floor">Floor 20</div>
                    <div className="app__floor">Floor 19</div>
                    <div className="app__floor">Floor 18</div>
                    <div className="app__floor">Floor 17</div>
                    <div className="app__floor">Floor 16</div>
                    <div className="app__floor">Floor 15</div>
                    <div className="app__floor">Floor 14</div>
                    <div className="app__floor">Floor 13</div>
                    <div className="app__floor">Floor 12</div>
                    <div className="app__floor">Floor 11</div>
                    <div className="app__floor">Floor 10</div>
                    <div className="app__floor">Floor 9</div>
                    <div className="app__floor">Floor 8</div>
                    <div className="app__floor">Floor 7</div>
                    <div className="app__floor">Floor 6</div>
                    <div className="app__floor">Floor 5</div>
                    <div className="app__floor">Floor 4</div>
                    <div className="app__floor">Floor 3</div>
                    <div className="app__floor">Floor 2</div>
                    <div className="app__floor">Floor 1</div>
                </div>
            </div>
        </div>
    );
}

export default App;
