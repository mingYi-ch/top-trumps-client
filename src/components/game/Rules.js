import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import CardMedia from '@material-ui/core/CardMedia'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '25%',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  }
};

const rules = [
  'Initially, from a deck of 20 cards, player and computer (opponent) are allocated 10 cards randomly.',
  'There are 10 rounds. In each round the player selects a feature on their movie card to compete on.',
  'If the selected feature is better than the computer\'s card, the player receives points, and vice versa.',
  'To decide which feature values trump the opponent\'s values, following rules are applied:',
  '   Higher popularity trumps lower popularity.',
  '   Higher rating trumps lower rating.',
  '   Higher revenue trumps lower revenue.',
  '   Higher budget trumps lower budget.',
  '   Longer run time trumps shorter run time.'
]

const items = rules.map((rule, idx) => {
    return <li key={idx}>{rule}</li>;
});

class Rules extends Component {

    render(){
        return (
          <Grid container justify='center'>
          <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Rules"
                  height="450"
                  image="https://m.media-amazon.com/images/S/aplus-media/vc/f372ac67-2795-405d-b0bf-a187a1cc79ad.jpg"
                  title="Game Rules"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Rules
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    <ul> {items} </ul>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small" color="primary"
                  onClick={this.props.history.goBack}>
                  Go Back!
                </Button>
            </CardActions>
            </Card>
            </Grid>
        )
    }

}

export default withStyles(styles) (withRouter(Rules));
