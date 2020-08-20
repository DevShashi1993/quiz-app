import React from "react";
// import questionsData from "../../questionsData";
import QuestionBoard from "../QuestionBoard/QuestionBoard";
import QuizTimer from "../QuizTimer/QuizTimer";
import QuestionPallete from "../QuestionPallete/QuestionPallete";
import { useSelector, useDispatch } from "react-redux";
import {
  MDBRow,
  MDBCol
} from "mdbreact";

const Quiz = ({remainingTimeInSecs}) => {
  const { questionsData, quizDurationInSecs } = useSelector((state) => state.quizState);

  return (
    <>
      <MDBRow>
        <MDBCol md="9">
          <QuestionBoard questionsData={questionsData} />
        </MDBCol>

        <MDBCol md="3">
          <MDBRow>
            <QuizTimer
              quizDurationInSecs={quizDurationInSecs}
              questionsData={questionsData}
              remainingTimeInSecs={remainingTimeInSecs}
            />
            <QuestionPallete questionsData={questionsData} />
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default Quiz;
