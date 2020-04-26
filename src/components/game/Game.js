import React from "react";
import Cards from "./cards/Cards";
import { withRouter } from "react-router-dom";

const NO_OF_ROUNDS = 10

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.handleSelection = this.handleSelection.bind(this);
        this.state = {
            currentRound: 1,
            playerCard: {
                title: "Movie A (player)",
                popularity: 0.0,
                revenue$: 0,
                budget$: 0,
                runtimeMin: 0.0
            },
            computerCard: {
                title: "Movie B (computer)",
                popularity: 0.0,
                revenue$: 0,
                budget$: 0,
                runtimeMin: 0.0
            },
            playerScore: 0,
            computerScore: 0
        };
    }

    /** 
     * Using this standard method for synchronization reasons, since
     * calling retrieveCards() from constructor doesn't work.
     */
    componentDidMount() {
        this.retrieveCards();
    }

    newGame() {
        this.retrieveCards();
        this.setState({currentRound: 1, playerScore: 0, computerScore: 0});
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

    updateScores(playerFeature, computerFeature) {
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

    updateRound() {
        var incrementedRound = this.state.currentRound + 1;

        if (this.state.currentRound === NO_OF_ROUNDS) {
            this.handleRanks();
            return;
        }
        
        this.setState({currentRound: incrementedRound});
        this.retrieveCards();
    }

    retrieveCards() {
        // eventually query backend's API here
        // awardsWon is assigned a random value in between 0-10
        this.setState({
            playerCard: {
                title: "A Clockwork Orange",
                popularity: 0.87,
                revenue$: 2400000,
                budget$: 900000,
                runtimeMin: 127.0
            },
            computerCard: {
                title: "The Shining",
                popularity: 0.91,
                revenue$: 3300000,
                budget$: 1300000,
                runtimeMin: 140.0
            },
        });
    }

    handleSelection(chosenFeature) {
        var playerFeature, computerFeature;

        switch (chosenFeature) {
            case "Popularity":
                playerFeature = this.state.playerCard.popularity;
                computerFeature = this.state.computerCard.popularity;
                break;
            case "Revenue":
                playerFeature = this.state.playerCard.revenue$;
                computerFeature = this.state.computerCard.revenue$;
                break;
            case "Budget":
                playerFeature = this.state.playerCard.budget$;
                computerFeature = this.state.computerCard.budget$;
                break;
            case "Run time":
                playerFeature = this.state.playerCard.runtimeMin;
                computerFeature = this.state.computerCard.runtimeMin;
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

export default withRouter(Game);
