
export const questionAnswered = (qid, optAnswered) => (dispatch, getState) => {

    let qtnAnsweredObj = {
        "qid": qid,
        "optionAnswered": optAnswered
    };

    let qtnAnsweredArr = getState().questionState.qtnAnswered;

    let newQtnAnsweredArr = qtnAnsweredArr.map(obj => {return {...obj}});
    
    const index = newQtnAnsweredArr.findIndex(obj => obj.qid === qid);
    if (index > -1) 
        newQtnAnsweredArr[index] = qtnAnsweredObj;
    else 
        newQtnAnsweredArr.push(qtnAnsweredObj);

    dispatch({ type: 'QTN_ANSWERED' , qtnAnswered: newQtnAnsweredArr} );
}

export const changeQuestion = (qid) => (dispatch) => {
    dispatch({ type: 'CHANGE_QTN' , currQuestionIndex: qid} );
}

export const resetQuestionAnswered = (qid) => (dispatch, getState) => {
    let qtnAnsweredArr = getState().questionState.qtnAnswered;

    let newQtnAnsweredArr = qtnAnsweredArr.map(obj => {return {...obj}});
    
    const index = newQtnAnsweredArr.findIndex(obj => obj.qid === qid);
    if (index > -1) 
        newQtnAnsweredArr.splice(index, 1);
        
    dispatch({ type: 'RESET_QTN' , qtnAnswered: newQtnAnsweredArr} );
}
