import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./components/app";
import ErrorCatcher from "./components/error-catcher";
import QuizeService from "./services/quize-service";
import { Provider as QuizeServiceProvider } from "./components/quize-service-context";

import store from "./store";

const quizeService = new QuizeService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorCatcher>
            <QuizeServiceProvider value={quizeService}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </QuizeServiceProvider>
        </ErrorCatcher>
    </Provider>,
    document.getElementById("root")
);