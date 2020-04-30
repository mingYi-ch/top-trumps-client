import React, {Component} from "react";
// import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const genres = [
  'all',
  'adult',
  'adventure'
];

const MyBox = styled(Box)({
  background: 'linear-gradient(90deg, #20B2AA 30%, #e1ddbc 80%)',
  border: 2,
  borderRadius: 20,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  spacing: '20px',
  padding: '10px 10px 10px 10px'
});

const MyContainer = styled(Container)({
  spacing: '40px',
  padding: '10px 10px 10px 10px'
});


const MyButton = styled(Button)({
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  padding: '0 30px',
});

class Login extends Component {

    constructor(props) {
      super(props);
      this.state = {'genre': 'all'};
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      this.setState((state) => {
        return {genre: e.target.value}
      });
      //localStorage.setItem(key, e.target.value);
    };

    render(){
        return (
          <Grid container direction="column" alignItems="center" justify="center">
            <MyBox>
            <form noValidate autoComplete="on">
              <MyContainer>
                <FormLabel component="legend">Enter your nick:</FormLabel>
                <TextField id="name" label="Player's Name" variant="outlined" />
              </MyContainer>
              <MyContainer>
                <FormLabel component="legend">Year Range of Movies</FormLabel>
                <TextField id="from" label="starting year" variant="outlined" />
                <TextField id="to" label="ending year" variant="outlined" />
              </MyContainer>
              <MyContainer>
                <TextField
                  id="genre"
                  select
                  label="movie genre"
                  value={this.state.genre}
                  onChange={this.handleChange}
                  helperText='Please select the movie genre'
                >
                  {genres.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </MyContainer>
            </form>
            <MyContainer>
              <MyButton onClick = {() => {this.props.history.push("/rules")}}>
                Game Rules
              </MyButton>
              <MyButton onClick = {() => {this.props.history.push("/game")}}>
                Lets Play!
              </MyButton>
            </MyContainer>
          </MyBox>
          </Grid>
        )
    }

}


// the router component handle the order that the component displayed on the web
export default withRouter(Login);
