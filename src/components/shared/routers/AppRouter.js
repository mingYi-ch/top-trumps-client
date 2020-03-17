import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <div>
                    {/* <Route path="/" exact render={() => <Redirect to={"/game"} />} /> */}
                    </div>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default AppRouter;
