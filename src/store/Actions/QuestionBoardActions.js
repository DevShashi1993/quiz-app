
export const questionAnswered = (qid, optAnswered) => (dispatch, getState) => {

    let qtnAnsweredObj = {
        "qid": qid,
        "optionAnswered": optAnswered
    };

    const localStorageData = localStorage.getItem("quizData");

    // parse existing Local Storage data if available, otherwise blank object
    let existingLSData = localStorageData ? JSON.parse(localStorageData) : null;

    let qtnAnsweredArr = getState().questionState.qtnAnswered;

    let newQtnAnsweredArr = qtnAnsweredArr.map(obj => {return {...obj}});
    
    const index = newQtnAnsweredArr.findIndex(obj => obj.qid === qid);
    if (index > -1) 
        newQtnAnsweredArr[index] = qtnAnsweredObj;
    else 
        newQtnAnsweredArr.push(qtnAnsweredObj);

    existingLSData.qtnAnsweredArr = newQtnAnsweredArr;

    // sending off existing Local Storage data with the updated values to local storage
    localStorage.setItem("quizData", JSON.stringify(existingLSData));
    
    dispatch({ type: 'QTN_ANSWERED' , newQtnAnsweredArr: newQtnAnsweredArr} );
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
