import React from "react";
import Cards from "./cards/Cards";
import { withRouter } from "react-router-dom";

const NO_OF_ROUNDS = 10;
const API_HOST = "0.0.0.0";
const API_PORT = "5001"
const POSTER_PREFIX = "http://image.tmdb.org/t/p/w185/";

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.handleSelection = this.handleSelection.bind(this);
        this.state = {
            currentRound: 1,
            cardsData: undefined,
            playerCard: {
                title: "Movie A (player)",
                poster_path: "abc.jpg",
                popularity: 0.0,
                rating: 0.0,
                revenue$: 0,
                budget$: 0,
                runtimeMin: 0.0
            },
            computerCard: {
                title: "Movie B (computer)",
                poster_path: "xyz.jpg",
                popularity: 0.0,
                rating: 0.0,
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
        
        this.setState({currentRound: incrementedRound}, () => this.updateCards());
    }

    updateCards () {
        let playerCardIndex = 2 * this.state.currentRound - 2;
        let computerCardIndex = playerCardIndex + 1;
        console.log("playerCardIndex: ".concat(playerCardIndex));
        let card1 = this.state.cardsData[Object.keys(this.state.cardsData)[playerCardIndex]];
        let card2 = this.state.cardsData[Object.keys(this.state.cardsData)[computerCardIndex]];
        
        this.setState({
            playerCard: {
                title: card1.title,
                poster_path: POSTER_PREFIX.concat(card1.poster_path),
                popularity: card1.popularity,
                rating: card1.rating,
                revenue$: card1.revenue,
                budget$: card1.budget,
                runtimeMin: card1.runtime
            },
            computerCard: {
                title: card2.title,
                poster_path: POSTER_PREFIX.concat(card1.poster_path),
                popularity: card2.popularity,
                rating: card2.rating,
                revenue$: card2.revenue,
                budget$: card2.budget,
                runtimeMin: card2.runtime
            },
        });
    }

    retrieveCards() {
        // TODO: Update game nr after each game
        let fetchURL = "http://"
            .concat(API_HOST)
            .concat(":")
            .concat(API_PORT)
            .concat("/game/1");

        fetch(fetchURL)
            .then(response => response.json())
            .then(data => this.setState({cardsData: data},
                () => this.updateCards() ))
            .catch(error => {
                console.error("Failed to fetch data");
                return;
            }
        );
    }

    handleSelection(chosenFeature) {
        var playerFeature, computerFeature;

        switch (chosenFeature) {
            case "Popularity":
                playerFeature = this.state.playerCard.popularity;
                computerFeature = this.state.computerCard.popularity;
                break;
            case "Rating":
                playerFeature = this.state.playerCard.rating;
                computerFeature = this.state.computerCard.rating;
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
