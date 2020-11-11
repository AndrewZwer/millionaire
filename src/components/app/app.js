import React from "react";
import { Route, Switch } from "react-router-dom";
import { MainPage, QuizePage, FinalPage } from "../pages";

import "./app.css";

const App = () => {
    return(
        <Switch>
            <Route path="/" component={ MainPage } exact />
            <Route path="/quize" component={ QuizePage } />
            <Route path="/final" component={ FinalPage } />
        </Switch>
    )
};

export default App;