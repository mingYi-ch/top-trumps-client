import React, {Component, Fragment} from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Fragment>
                     <Route path="/" exact render={() => <Redirect to={"/game"} />} />
                    </Fragment>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default AppRouter;
