import React, {Component} from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const BaseContainer = styled.div`
  margin-left: auto;
  padding-left: 15px;
  margin-right: auto;
  padding-right: 15px;
  max-width: 1160px;
`;

const FormContainer = styled.div`
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  justify-content: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 550px;
  font-size: 16px;
  font-weight: 300;
  padding-left: 37px;
  padding-right: 37px;
  border-radius: 15px;
  background: linear-gradient(#20B2AA, #e1ddbc);
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

const FormSmall= styled.div`
  display: flex;
  flex-direction: row;
`;

const InputField = styled.input`
  &::placeholder {
    color: grey;
  }
  height: 35px;
  padding-left: 30px;
  padding-top: 6px;
  margin-left: -4px;
  border: none;
  border-radius: 20px;
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
`;

const InputFieldSmall = styled.input`
  &::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
  height: 35px;
  width: 50px
  padding-left: 30px;
  padding-top: 6px;
  margin-left: 15px;
  margin-right: 15px;
  border: none;
  border-radius: 20px;
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
`;

const Label = styled.label`
  color: white;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Button= styled.button`
  width: 30%;
  margin-top: 10px;

`;



class Login extends Component {

    render(){
        return (
            <BaseContainer>
                <FormContainer>
                    <Form>
                        <Label>Player Name</Label>
                        <InputField
                            // placeholder={this.state.username}
                            onChange={e => {
                                localStorage.setItem("username",e.target.value);
                        }}/>

                        <Label>Year Range of Movies</Label>
                        <FormSmall>
                            <Label style = {{textTransform:"lowercase"}}>From</Label>
                            <InputFieldSmall 
                            // placeholder={this.state.username}
                            onChange={e => {
                                localStorage.setItem("username",e.target.value);
                            }}/>

                            <Label style = {{textTransform:"lowercase"}}>to</Label>
                            <InputFieldSmall
                            // placeholder={this.state.username}
                            onChange={e => {
                                localStorage.setItem("username",e.target.value);
                            }}/>
                        </FormSmall>
                        

                        <Label>genre of Movies</Label>
                        <InputField list = "genre" autoComplete = "on"
                            placeholder="all"
                            onChange={e => {
                                localStorage.setItem("username",e.target.value);
                        }}/>
                        <datalist id="genre">
                          <option value="all"/>
                          <option value="adult"/>
                          <option value="adventure"/>
                        </datalist>

                        <ButtonContainer>
                          <Button 
                            // onClick = {() => {this.props.history.push("/gameRule")}}
                          >
                            View Game Rule
                          </Button>
                          <Button 
                            onClick = {() => {this.props.history.push("/game")}}
                          >
                            Let's Play!
                          </Button>
                        </ButtonContainer>
                    </Form>
                </FormContainer>
            </BaseContainer>
        )
    }

}


// the router component handle the order that the component displayed on the web
export default withRouter(Login); 