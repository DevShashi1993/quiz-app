const initialState = {
    name : "",
    startTime: null,
    quizDurationInSecs: null,
    resultData: null,
    isQuizStarted: false,
    isQuizFinished: false,
};

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT_QUIZ':
            console.log('INIT_QUIZ data',action.initQuizData );
            return {...state, ...action.initQuizData  };
        case 'FINISH_QUIZ':
            return {...state, ...action.finishQuizData };    
        default:
            return state;
    }
};

export default quizReducer;