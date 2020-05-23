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
  padding: '10px 10px 10px 10px',
  margin: '10px'
});

const MyContainer = styled(Container)({
  padding: '10px 10px 10px 10px',
  margin: '20px',
  '& .errors': {
    border: "1px solid red"
  }
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
      this.state = {'genre': 'all', 'name': '', 'start_year': '', 'end_year': ''};
      this.errors = {'name': false, 'start_year': false, 'end_year': false};
      this.handleChange = this.handleChange.bind(this);
      this.validatePlay = this.validatePlay.bind(this);
    }

    handleChange(e) {
      this.setState({[e.target.name] : e.target.value});
      console.log(this.state);
      localStorage.setItem(e.target.name, e.target.value);
    };

    validatePlay(e) {
      console.log(this.errors);
      if(this.state.name.length === 0){
        //empty name invalid input
        this.errors.name = true;
        alert("Please enter your nickname...");
      }
      else if(isNaN(this.state.start_year) ||
              this.state.start_year.length !== 4){
        //error with start year
        this.errors.start_year = true;
        alert("Wrong start year format detected...");
      }
      else if (isNaN(this.state.end_year) ||
               this.state.end_year.length !== 4){
        //error with end Year
        this.errors.end_year = true;
        alert("Wrong end year format detected...");
      }
      else if (this.state.start_year > this.state.end_year){
        this.errors.start_year = true;
        this.errors.end_year = true;
        alert("Start year must be <= end year...");
      }
      else{
        // inputs are valid
        this.props.history.push("/game");
      }

    }

    render(){
        return (
          <Grid container direction="column" alignItems="center" justify="center">
            <MyBox>
              <MyContainer>
                <FormLabel component="legend">Enter your nick:</FormLabel>
                <TextField
                name="name"
                id="name"
                className={this.errors.name ? "error" : ""}
                onChange={this.handleChange}
                label="Player's Name"
                variant="outlined"
                />
              </MyContainer>
              <MyContainer>
                <FormLabel component="legend">Year Range of Movies</FormLabel>
                <TextField
                  name="start_year"
                  id="start_year"
                  onChange={this.handleChange}
                  label="starting year"
                  variant="outlined"
                />
                <TextField
                  name="end_year"
                  id="end_year"
                  onChange={this.handleChange}
                  label="ending year"
                  variant="outlined"
                />
              </MyContainer>
              <MyContainer>
                <TextField
                  name="genre"
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
            <MyContainer>
              <MyButton onClick = {() => {this.props.history.push("/rules")}}>
                Game Rules
              </MyButton>
              <MyButton onClick={this.validatePlay}>
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
