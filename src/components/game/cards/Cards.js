import React from "react";
import FeatureButton from "./FeatureButton";
import FeatureInfo from "./FeatureInfo";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
                            <Card className="materialCards">
                                <CardMedia
                                    component="img"
                                    image={this.props.playerCard.poster_path}
                                    height="400"
                                />  
                                <CardContent>
                                    <Typography gutterBottom variant="noWrap">
                                        {this.props.playerCard.title}
                                    </Typography>
                                </CardContent>
                                <CardActionArea>
                                    <FeatureButton
                                        handleSelection={this.props.handleSelection}
                                        featureName={"Popularity"}
                                        value={this.props.playerCard.popularity}
                                    />
                                    <FeatureButton
                                        handleSelection={this.props.handleSelection}
                                        featureName={"Rating"}
                                        value={this.props.playerCard.rating}
                                    />
                                    <FeatureButton
                                        handleSelection={this.props.handleSelection}
                                        featureName={"Revenue"}
                                        value={this.props.playerCard.revenue$.toString().concat(" $")}
                                    />
                                    <FeatureButton
                                        handleSelection={this.props.handleSelection}
                                        featureName={"Budget"}
                                        value={this.props.playerCard.budget$.toString().concat(" $")}
                                    />
                                    <FeatureButton
                                        handleSelection={this.props.handleSelection}
                                        featureName={"Run time"}
                                        value={this.props.playerCard.runtimeMin.toString().concat(" min")}
                                    />
                                </CardActionArea>
                            </Card>
                        </td>
                        <td>
                            <Card className="materialCards">
                                <CardMedia
                                    component="img"
                                    image={this.props.computerCard.poster_path}
                                    height="400"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="noWrap">
                                        {this.props.computerCard.title}
                                    </Typography>
                                </CardContent>
                                <CardActionArea>
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
                                </CardActionArea>
                            </Card>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }

}

export default Cards;
