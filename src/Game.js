import React from "react";
import Cards from "./Cards"

const NO_OF_ROUNDS = 10

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentRound: 1
        };
        // trigger retrieving new data here eventually
    }

    // mock data to be replaced by data coming from query
    playerCard = {
        rating: 9.2,
        awardsWon: 5,
        revenue$: 2000000,
        durationMin: 127,
        directorRating: 8.3
    };

    computerCard = {
        rating: 8.7,
        awardsWon: 3,
        revenue$: 2500000,
        durationMin: 168,
        directorRating: 7.9
    };

    newGame() {
        // trigger retrieving new data here eventually
        this.setState({currentRound: 1});
        console.log("Game restarted!");
    }

    handleSelection(chosenFeature) {
        // add feature trumping logic here eventually
        console.log("Chosen feature: " + chosenFeature);
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Cards
                        playerCard = {this.playerCard}
                        computerCard = {this.computerCard}
                        handleSelection = {this.handleSelection}
                    />
                </div>
                <div className="game-info">
                    <div>Round {this.state.currentRound}/{NO_OF_ROUNDS}</div>
                    <button onClick={() => this.newGame()}>
                        New Game
                    </button>
                </div>
            </div>
        );
    }
}

export default Game;
