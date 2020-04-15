import React, {Component} from "react";
import Header from "./views/Header";
import AppRouter from "./components/shared/routers/AppRouter";
//import Game from "./components/game/Game"

class App extends Component {
    render() {
        return (
            <div>
                <Header height = {"100"}/>
                <AppRouter/>
            </div>
        );
    }
}

export default App;
