import React from "react";
import FeatureButton from "./FeatureButton";
import FeatureInfo from "./FeatureInfo";

class Cards extends React.Component {
    
    // mock data to be replaced by data coming from queries
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
                                    featureName={"Rating"}
                                    value={this.playerCard.rating.toString().concat(" / 10")}
                                />
                                <FeatureButton
                                    featureName={"Awards won"}
                                    value={this.playerCard.awardsWon}
                                />
                                <FeatureButton
                                    featureName={"Revenue"}
                                    value={this.playerCard.revenue$.toString().concat(" $")}
                                />
                                <FeatureButton
                                    featureName={"Duration"}
                                    value={this.playerCard.durationMin.toString().concat(" min")}
                                />
                                <FeatureButton
                                    featureName={"Director rating"}
                                    value={this.playerCard.directorRating.toString().concat(" / 10")}
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
                                    value={this.computerCard.rating.toString().concat(" / 10")}
                                />
                                <FeatureInfo
                                    featureName={"Awards won"}
                                    value={this.computerCard.awardsWon}
                                />
                                <FeatureInfo
                                    featureName={"Revenue"}
                                    value={this.computerCard.revenue$.toString().concat(" $")}
                                />
                                <FeatureInfo
                                    featureName={"Duration"}
                                    value={this.computerCard.durationMin.toString().concat(" min")}
                                />
                                <FeatureInfo
                                    featureName={"Director rating"}
                                    value={this.computerCard.directorRating.toString().concat(" / 10")}
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
