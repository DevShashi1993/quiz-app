
export const initQuiz = (usrData) => (dispatch, getState) => {
  let name = usrData.firstname + " " + usrData.lastname;
  let quizStartTime = new Date();
  let hour = quizStartTime.getHours();
  let min = quizStartTime.getMinutes();
  let secs = quizStartTime.getSeconds();

  let newData = {
    name: name,
    startTime: quizStartTime,
    quizDurationInSecs: (1 * 60),
    isQuizStarted: true,
  };

  const localStorageData = localStorage.getItem("quizData");

  // parse existing Local Storage data if available, otherwise blank object
  let existingLSData = localStorageData ? JSON.parse(localStorageData) : {};

  // merge the new data with existing ones we have already in Local Storage
  existingLSData = { ...existingLSData, ...newData };

  // sending off existing Local Storage data with the updated values to local storage
  localStorage.setItem("quizData", JSON.stringify(existingLSData));

  dispatch({ type: "INIT_QUIZ", initQuizData: newData });
};

export const finishQuiz = (questionsData, qtnAnswered) => (dispatch, getState) => {

  const mergedList = (arr1, arr2) =>
      arr1.map(a1 => {
        Object.assign(a1, { optionAnswered: "na" });
        arr2.forEach(a2 => {
          if (a1.qid === a2.qid) Object.assign(a1, a2);
        });
        return a1;
      });
      
    const resultData = mergedList(questionsData, qtnAnswered);
    console.log('resultData',resultData);

  let newData = {
    resultData: resultData,
    isQuizFinished: true,
  };

  dispatch({ type: "FINISH_QUIZ", finishQuizData: newData });
};
