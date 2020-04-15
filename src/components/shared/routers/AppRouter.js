import React, {Component, Fragment} from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "../../login/Login";
import Game from "../../game/Game";

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Fragment>
                        <Route 
                            path = "/login" 
                            render = {() => <Login/> }
                        />
                     <Route 
                        path = "/game"
                        render = {() => <Game/> }
                     />
                     <Route path="/" exact render={() => <Redirect to={"/login"} />} />
                    </Fragment>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default AppRouter;
