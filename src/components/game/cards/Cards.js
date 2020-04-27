import React from "react";
import FeatureButton from "./FeatureButton";
import FeatureInfo from "./FeatureInfo";

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
                                <FeatureInfo
                                    featureName={"Title"}
                                    value={this.props.playerCard.title}
                                />
                                <FeatureButton
                                    handleSelection = {this.props.handleSelection}
                                    featureName={"Popularity"}
                                    value={this.props.playerCard.popularity}
                                />
                                <FeatureButton
                                    handleSelection = {this.props.handleSelection}
                                    featureName={"Rating"}
                                    value={this.props.playerCard.rating}
                                />
                                <FeatureButton
                                    handleSelection = {this.props.handleSelection}
                                    featureName={"Revenue"}
                                    value={this.props.playerCard.revenue$.toString().concat(" $")}
                                />
                                <FeatureButton
                                    handleSelection = {this.props.handleSelection}
                                    featureName={"Budget"}
                                    value={this.props.playerCard.budget$.toString().concat(" $")}
                                />
                                <FeatureButton
                                    handleSelection = {this.props.handleSelection}
                                    featureName={"Run time"}
                                    value={this.props.playerCard.runtimeMin.toString().concat(" min")}
                                />
                            </div>
                        </td>
                        <td>
                        <div className="card">
                                <div className="moviePicture">
                                    [Movie Poster]
                                </div>
                                <FeatureInfo
                                    featureName={"Title"}
                                    value={this.props.computerCard.title}
                                />
                                <FeatureInfo
                                    featureName={"Popularity"}
                                    value={this.props.computerCard.popularity}
                                />
                                <FeatureInfo
                                    featureName={"Rating"}
                                    value={this.props.computerCard.rating}
                                />
                                <FeatureInfo
                                    featureName={"Revenue"}
                                    value={this.props.computerCard.revenue$.toString().concat(" $")}
                                />
                                <FeatureInfo
                                    featureName={"Budget"}
                                    value={this.props.computerCard.budget$.toString().concat(" $")}
                                />
                                <FeatureInfo
                                    featureName={"Run time"}
                                    value={this.props.computerCard.runtimeMin.toString().concat(" min")}
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
