import React from "react";
import questionsData from "../../questionsData";
import QuestionBoard from "../QuestionBoard/QuestionBoard";
import QuizTimer from "../QuizTimer/QuizTimer";
import QuestionPallete from "../QuestionPallete/QuestionPallete";

import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBBtn,
  MDBRow,
  MDBCol
} from "mdbreact";

const Quiz = () => {
  //const { qtnAnswered, currQuestionIndex } = useSelector(state => state.questionState);

  const shuffleArray = arr => {
    var currentIndex = arr.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }

    return arr;
  };

  shuffleArray(questionsData);

  return (
    <>
      <MDBRow>
        <MDBCol md="9">
          <QuestionBoard questionsData={questionsData} />
        </MDBCol>

        <MDBCol md="3">
          <MDBRow>
            <QuizTimer totalTimeInSecs={10 * 60} />
            <QuestionPallete noOfQuestions={questionsData.length}/>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default Quiz;
