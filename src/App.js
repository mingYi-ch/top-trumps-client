import React, {Component} from "react";
import Header from "./views/Header";
import AppRouter from "./components/shared/routers/AppRouter";
import Game from "./Game"

class App extends Component {
    render() {
        return (
            <div>
                <Header height = {"100"}/>
                <Game/>
                <AppRouter/>
            </div>
        );
    }
}

export default App;
