import React from "react";

import { Consumer } from "../quize-service-context";

const withQuizeService = () => (WrappedComponent) => {
    return (props) => {
        return (
            <Consumer>
                {
                    (quizeService) => {
                        return(
                            <WrappedComponent {...props} quizeService={quizeService} />
                        );
                    }
                }
            </Consumer>
        );
    }
}

export default withQuizeService;