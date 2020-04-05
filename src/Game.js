import React from "react";
import Cards from "./Cards"

const NO_OF_ROUNDS = 10

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentRound: 1
        };
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Cards/>
                </div>
                <div className="game-info">
                    <div>Round {this.state.currentRound}/{NO_OF_ROUNDS}</div>
                    <button onClick={() => this.setState({currentRound: this.state.currentRound + 1})}/>
                </div>
            </div>
        );
    }
}

export default Game;
