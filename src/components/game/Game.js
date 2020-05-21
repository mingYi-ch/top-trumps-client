import React from "react";
import Cards from "./cards/Cards";
import WinnerAlert from "./WinnerAlert";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";

const NO_OF_ROUNDS = 10;
const API_HOST = "0.0.0.0";
const API_PORT = "5001"
const OMDB_URL_PREFIX = "http://www.omdbapi.com/?t=";
const OMDB_API_KEY_SUFFIX = "&apikey=8a7683a8";
const NEW_ROUND_TIMEOUT_MS = 1600;
const TOO_LITTLE_DATA_MSG = "Too little cards in the retrieved deck. Please try another filter..."

const MyBox = styled(Box)({
    textAlign: 'center',
    spacing: '20px',
    padding: '25px',
    marginLeft: '20%',
    marginRight: '20%',
    background: 'linear-gradient(90deg, #20B2AA 30%, #e1ddbc 80%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    border: 2,
    borderRadius: 20
});

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.handleSelection = this.handleSelection.bind(this);
        this.newGame = this.newGame.bind(this);
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
            computerScore: 0,
            hideOpponentFeatures: false,
            winnerMessage: "No winner yet",
            showWinnerAlert: false
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
        this.setState({currentRound: 1, playerScore: 0, computerScore: 0, showWinnerAlert: false});
    }

    handleRanks() {
        this.setState({showWinnerAlert: true})
        if (this.state.playerScore > this.state.computerScore) {
            this.setState({winnerMessage: "You win! 🏆"});
        } else if (this.state.computerScore > this.state.playerScore) {
            this.setState({winnerMessage: "Computer wins! 🖥️🤖"});
        } else {
            this.setState({winnerMessage: "It's a tie! #👔"});
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

    updateCards() {
        let playerCardIndex = 2 * this.state.currentRound - 2;
        let computerCardIndex = playerCardIndex + 1;
        let card1 = this.state.cardsData[Object.keys(this.state.cardsData)[playerCardIndex]];
        let card2 = this.state.cardsData[Object.keys(this.state.cardsData)[computerCardIndex]];
        
        let title1 = (card1.title.length > 29) ? card1.title.toString().substring(0,30).concat("...") : card1.title;
        let title2 = (card2.title.length > 29) ? card2.title.toString().substring(0,30).concat("...") : card2.title;

        let omdbURL1 = OMDB_URL_PREFIX + encodeURI(card1.title.toString()) + OMDB_API_KEY_SUFFIX;
        let omdbURL2 = OMDB_URL_PREFIX + encodeURI(card2.title.toString()) + OMDB_API_KEY_SUFFIX;

        this.setState({hideOpponentFeatures: true});

        fetch(omdbURL1)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    playerCard: {
                        title: title1,
                        poster_path: data.Poster,
                        popularity: card1.popularity,
                        rating: card1.rating,
                        revenue$: card1.revenue,
                        budget$: card1.budget,
                        runtimeMin: card1.runtime
                    }
                });
            })
            .catch(error => {
                console.log(error);
                return;
            });

        fetch(omdbURL2)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    computerCard: {
                        title: title2,
                        poster_path: data.Poster,
                        popularity: card2.popularity,
                        rating: card2.rating,
                        revenue$: card2.revenue,
                        budget$: card2.budget,
                        runtimeMin: card2.runtime
                    }
                });
            })
            .catch(error => {
                console.log(error);
                return;
            });
    }

    retrieveCards() {
        let fetchURL = "http://"
            .concat(API_HOST)
            .concat(":")
            .concat(API_PORT)
            .concat("/game/1");

        fetch(fetchURL)
            .then(response => response.json())
            .then(data => {
                this.setState({cardsData: data});
                // If received less than 20 cards: Re-route to login page
                let len = Object.keys(data).length;
                if(len < 20) {
                    alert(TOO_LITTLE_DATA_MSG);
                    this.props.history.push("/login")
                } else this.updateCards();
            })
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

        this.setState({hideOpponentFeatures: false}, () => {
            setTimeout(() => {
                this.updateScores(playerFeature, computerFeature)
            }, NEW_ROUND_TIMEOUT_MS);
        });
    }

    render() {
        return (
            <MyBox className="game">
                <div>
                    <WinnerAlert
                        show = {this.state.showWinnerAlert}
                        playerScore = {this.state.playerScore}
                        computerScore = {this.state.computerScore}
                        winnerAnnouncement = {this.state.winnerMessage}
                        newGame = {this.newGame}
                    />
                </div>
                <div className="game-board">
                    <Cards
                        playerCard = {this.state.playerCard}
                        computerCard = {this.state.computerCard}
                        handleSelection = {this.handleSelection}
                        hideOpponentFeatures = {this.state.hideOpponentFeatures}
                    />
                </div>
                <Card className="game-info">
                    <CardContent>
                        <Typography variant="subtitle2">Score Player: {this.state.playerScore}</Typography>
                        <Typography variant="subtitle2">Score Computer: {this.state.computerScore}</Typography>
                        <Typography variant="subtitle2">Round {this.state.currentRound}/{NO_OF_ROUNDS}</Typography>
                    </CardContent>
                    <Button onClick={() => this.newGame()} variant="contained">
                        New Game
                    </Button>
                </Card>
            </MyBox>
        );
    }
}

export default withRouter(Game);
