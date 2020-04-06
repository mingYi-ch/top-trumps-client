import React from "react";
import Cards from "./Cards"

const NO_OF_ROUNDS = 10

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.handleSelection = this.handleSelection.bind(this);
        this.state = {
            currentRound: 1,
            // mock data eventually to be replaced by data coming from query
            playerCard: {    
                rating: 9.2,
                awardsWon: 5,
                revenue$: 2000000,
                durationMin: 127,
                directorRating: 8.3
            },
            // mock data eventually to be replaced by data coming from query
            computerCard: {
                rating: 8.7,
                awardsWon: 5,
                revenue$: 2500000,
                durationMin: 168,
                directorRating: 7.9
            },
            playerScore: 0,
            computerScore: 0
        };
        // trigger retrieving new data here eventually
    }

    newGame() {
        // trigger retrieving new data here eventually
        this.setState({currentRound: 1, playerScore: 0, computerScore: 0});
        console.log("Game restarted!");
    }

    handleRanks() {
        /**
         * Not sure whether using setTimeout is good practice here.
         * The reason I use it is because the callback for the setState
         * method at l. 81, 82 does not seem to work properly.
         */
        if (this.state.playerScore > this.state.computerScore) {
            setTimeout(() => {
                alert("You win!");
                this.newGame();
            }, 100);
        } else if (this.state.computerScore > this.state.playerScore) {
            setTimeout(() => {
                alert("Computer wins!");
                this.newGame();
            }, 100);
        } else {
            setTimeout(() => {
                alert("It's a tie!");
                this.newGame();
            }, 100);
        }
    }

    updateScores (playerFeature, computerFeature) {
        console.log("updateScores called. currentRound: " + this.state.currentRound);
        var playerScore = this.state.playerScore;
        var computerScore = this.state.computerScore;

        if (playerFeature > computerFeature) {
            ++playerScore;
        } else if (computerFeature > playerFeature) {
            ++computerScore;
        } else {
            ++playerScore;
            ++computerScore;
        }

        this.setState({
            playerScore: playerScore,
            computerScore: computerScore
        }, () => {
            this.updateRound();
        });
    }

    updateRound () {
        var incrementedRound = this.state.currentRound + 1;

        if (this.state.currentRound === 10) {
            this.handleRanks();
            return;
        }
        
        this.setState({currentRound: incrementedRound});
    }

    handleSelection(chosenFeature) {
        var playerFeature, computerFeature;

        switch (chosenFeature) {
            case "Rating":
                playerFeature = this.state.playerCard.rating;
                computerFeature = this.state.computerCard.rating;
                break;
            case "Awards won":
                playerFeature = this.state.playerCard.awardsWon;
                computerFeature = this.state.computerCard.awardsWon;
                break;
            case "Revenue":
                playerFeature = this.state.playerCard.revenue$;
                computerFeature = this.state.computerCard.revenue$;
                break;
            case "Duration":
                playerFeature = this.state.playerCard.durationMin;
                computerFeature = this.state.computerCard.durationMin;
                break;
            case "Director rating":
                playerFeature = this.state.playerCard.directorRating;
                computerFeature = this.state.computerCard.directorRating;
                break;
            default:
                console.error("Chosen feature not handled in Game class!");
                return;
        }
        
        this.updateScores(playerFeature, computerFeature);
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Cards
                        playerCard = {this.state.playerCard}
                        computerCard = {this.state.computerCard}
                        handleSelection = {this.handleSelection}
                    />
                </div>
                <div className="game-info">
                    <div>Score Player: {this.state.playerScore}</div>
                    <div>Score Computer: {this.state.computerScore}</div>
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
