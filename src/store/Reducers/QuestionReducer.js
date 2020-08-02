
const initialState = {
    qtnAnswered : [],
    currQuestionIndex: 0
};

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'QTN_ANSWERED':
            return Object.assign({}, state, { qtnAnswered: action.qtnAnswered  });
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