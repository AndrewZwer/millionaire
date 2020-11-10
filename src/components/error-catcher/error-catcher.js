import React, { Component } from "react";

import ErrorIndicator from "../error-indicator";

export default class ErrorCatcher extends Component {
    state = {
        gotError: false
    };

    componentDidCatch(){
        this.setState({gotError: true});
    };

    render(){
        if(this.state.gotError){
            return <ErrorIndicator />;
        }
        return this.props.children;
    };
}