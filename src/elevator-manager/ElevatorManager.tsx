import Floor from "./Floor";
import Elevator from "./Elevator";

class ElevatorManager {
    constructor(
        private state: any,
        private setState: any
    ) {}

    getElevatorCount(): number {
        return this.state.elevators.length;
    }

    addElevator(): void {
        this.setState({
            ...this.state,
            elevators: [
                ...this.state.elevators,
                new Elevator(this.state.elevators.length, this.state.floors[0])
            ]
        });
    }

    removeElevator(): void {
        this.setState({
            ...this.state,
            elevators: [
                ...this.state.elevators.slice(0, this.state.elevators.length - 1)
            ]
        });
    }

    getFloorCount(): number {
        return this.state.floors.length;
    }

    addFloor(): void {
        this.setState({
            ...this.state,
            floors: [
                ...this.state.floors,
                new Floor(this.state.floors.length)
            ]
        });
    }

    removeFloor(): void {
        this.setState({
            ...this.state,
            floors: [
                ...this.state.floors.slice(0, this.state.floors.length - 1)
            ]
        });
    }

    getElevators(): Elevator[] {
        return this.state.elevators;
    }

    getFloors(): Floor[] {
        return this.state.floors;
    }

    callNearestElevator(floor: Floor): void {
        let minDiff = Infinity;
        let nearestElevatorIndex = 0;

        // get the index of nearest elevator
        this.state.elevators.forEach((elevator: Elevator, elevatorIndex: number) => {
            let diff = Math.abs(floor.getId() - elevator.getFloor().getId());
            if (diff < minDiff) {
                minDiff = diff;
                nearestElevatorIndex = elevatorIndex;
            }
        });

        // set nearest elevator to current floor
        let nearestElevator = this.state.elevators[nearestElevatorIndex];
        nearestElevator.setFloor(floor);

        let newState = {
            ...this.state,
            elevators: [
                ...this.state.elevators.slice(0, nearestElevatorIndex),
                nearestElevator,
                ...this.state.elevators.slice(nearestElevatorIndex + 1)
            ]
        };

        this.setState(newState);
    }
}

export default ElevatorManager;