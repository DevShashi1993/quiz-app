const newinitialState = {
    name : "",
    startTime: null,
    quizDurationInSecs: null,
    questionsData: null,
    resultData: null,
    isQuizStarted: false,
    isQuizFinished: false,
};

const localStorageData = localStorage.getItem("quizData");

// parse existing Local Storage data if available, otherwise blank object
let initialState = localStorageData ? JSON.parse(localStorageData) : newinitialState;

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT_QUIZ':
            return {...state, ...action.initQuizData  };
        case 'FINISH_QUIZ':
            return {...state, ...action.finishQuizData };    
        default:
            return state;
    }
};

export default quizReducer;