const questionsLoaded = (question) => {
    return {
        type: "QUESTIONS_LOADED",
        payload: question
    };
};

export {
    questionsLoaded
}