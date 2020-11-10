const initialState = {
    questions: []
}

const reduser = (state = initialState, action) => {
    switch(action.type) {
        case "QUESTIONS_LOADED":
            return {
                questions: action.payload
            }
        default:
            return state;
    }
    return state;
}

export default reduser;