
const newinitialState = {
    qtnAnswered : [],
    currQuestionIndex: 0
};


const localStorageData = localStorage.getItem("quizData");

if(localStorageData) {
    let localData = JSON.parse(localStorageData);
    newinitialState.qtnAnswered = localData.qtnAnsweredArr;
} 

let initialState = newinitialState;

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'QTN_ANSWERED':
            return {...state, qtnAnswered: action.newQtnAnsweredArr  };
        case 'NEXT_QTN':
            return Object.assign({}, state, { currQuestionIndex: state.currQuestionIndex + 1 });
        case 'PREV_QTN':
            return Object.assign({}, state, { currQuestionIndex: state.currQuestionIndex - 1 });
        case 'CHANGE_QTN':
            return Object.assign({}, state, { currQuestionIndex: action.currQuestionIndex  });
        case 'RESET_QTN':
            return Object.assign({}, state, { qtnAnswered: action.qtnAnswered  });
        default:
            return state;
    }
};

export default questionReducer;