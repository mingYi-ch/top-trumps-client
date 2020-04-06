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
                                <FeatureButton
                                    featureName={"Rating"}
                                    value={9.2}
                                />
                                <FeatureButton
                                    featureName={"Awards won"}
                                    value={5}
                                />
                                <FeatureButton
                                    featureName={"Revenue"}
                                    value={2000000}
                                />
                                <FeatureButton
                                    featureName={"Duration"}
                                    value={127}
                                />
                                <FeatureButton
                                    featureName={"Director rating"}
                                    value={8.3}
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
                                    value={9.2}
                                />
                                <FeatureInfo
                                    featureName={"Awards won"}
                                    value={5}
                                />
                                <FeatureInfo
                                    featureName={"Revenue"}
                                    value={2000000}
                                />
                                <FeatureInfo
                                    featureName={"Duration"}
                                    value={127}
                                />
                                <FeatureInfo
                                    featureName={"Director rating"}
                                    value={8.3}
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
