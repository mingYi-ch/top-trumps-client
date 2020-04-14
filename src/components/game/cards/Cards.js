import React from "react";
import FeatureButton from "./FeatureButton";
import FeatureInfo from "./FeatureInfo";

const MAX_MOVIE_RATING = "10";
const MAX_DIRECTOR_RATING = "10";

class Cards extends React.Component {
    
    render() {
        return (
            <table className="cards">
                <thead>
                    <tr>
                        <th>Player's Card</th>
                        <th>Computer's Card</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="card">
                                <div className="moviePicture">
                                    [Movie Poster]
                                </div>
                                <FeatureButton
                                    handleSelection = {this.props.handleSelection}
                                    featureName={"Rating"}
                                    value={this.props.playerCard.rating.toString().concat(" / ").concat(MAX_MOVIE_RATING)}
                                />
                                <FeatureButton
                                    handleSelection = {this.props.handleSelection}
                                    featureName={"Awards won"}
                                    value={this.props.playerCard.awardsWon}
                                />
                                <FeatureButton
                                    handleSelection = {this.props.handleSelection}
                                    featureName={"Revenue"}
                                    value={this.props.playerCard.revenue$.toString().concat(" $")}
                                />
                                <FeatureButton
                                    handleSelection = {this.props.handleSelection}
                                    featureName={"Duration"}
                                    value={this.props.playerCard.durationMin.toString().concat(" min")}
                                />
                                <FeatureButton
                                    handleSelection = {this.props.handleSelection}
                                    featureName={"Director rating"}
                                    value={this.props.playerCard.directorRating.toString().concat(" / ").concat(MAX_DIRECTOR_RATING)}
                                />
                            </div>
                        </td>
                        <td>
                        <div className="card">
                                <div className="moviePicture">
                                    [Movie Poster]
                                </div>
                                <FeatureInfo
                                    featureName={"Rating"}
                                    value={this.props.computerCard.rating.toString().concat(" / ").concat(MAX_MOVIE_RATING)}
                                />
                                <FeatureInfo
                                    featureName={"Awards won"}
                                    value={this.props.computerCard.awardsWon}
                                />
                                <FeatureInfo
                                    featureName={"Revenue"}
                                    value={this.props.computerCard.revenue$.toString().concat(" $")}
                                />
                                <FeatureInfo
                                    featureName={"Duration"}
                                    value={this.props.computerCard.durationMin.toString().concat(" min")}
                                />
                                <FeatureInfo
                                    featureName={"Director rating"}
                                    value={this.props.computerCard.directorRating.toString().concat(" / ").concat(MAX_DIRECTOR_RATING)}
                                />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }

}

export default Cards;
