import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {
  MDBIcon,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardFooter,
  MDBBtn,
  MDBRow,
  MDBCol
} from "mdbreact";
import { useSelector, useDispatch } from "react-redux";
import { finishQuiz } from "../../store/Actions/QuizActions";
import {
  questionAnswered,
  resetQuestionAnswered,
} from "../../store/Actions/QuestionBoardActions";

const QuestionBoard = ({ questionsData }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { qtnAnswered, currQuestionIndex } = useSelector(
    (state) => state.questionState
  );
  const { qid, question, options } = questionsData[currQuestionIndex];

  // Result Logic
  const viewResult = () => {
    const mergedList = (arr1, arr2) =>
      arr1.map((a1) => {
        Object.assign(a1, { optionAnswered: "na" });
        arr2.forEach((a2) => {
          if (a1.qid === a2.qid) Object.assign(a1, a2);
        });
        return a1;
      });
    const resultData = mergedList(questionsData, qtnAnswered);
    console.log(resultData);

    history.push({
      pathname: "/result",
      resultData: resultData,
    });

    dispatch({ type: "FINISH_QUIZ" });
  };

  useEffect(() => {
    console.log("questionsData", questionsData);
    console.log("qtnAnswered", qtnAnswered);
  }, [qid, qtnAnswered, questionsData]);

  const updateQtnAnswered = (event) => {
    dispatch(questionAnswered(qid, parseInt(event.target.value)));
  };

  const prevQuestion = () => {
    if (currQuestionIndex !== 0) {
      dispatch({ type: "PREV_QTN" });
    }
  };

  const nextQuestion = () => {
    if (currQuestionIndex !== questionsData.length - 1) {
      dispatch({ type: "NEXT_QTN" });
    }
  };

  const resetQuestion = () => {
    dispatch(resetQuestionAnswered(qid));
  };

  const currQuestionSelectedOpt = () => {
    let index = qtnAnswered.findIndex((q) => q.qid === qid);
    return index !== -1 ? qtnAnswered[index].optionAnswered : 0;
  };

  return (
    <>
      <MDBCard>
        <MDBCardHeader color="primary-color" tag="h3">
          Question {<b>{currQuestionIndex + 1}</b>} of{" "}
          {<b>{questionsData.length}</b>}
        </MDBCardHeader>
        <MDBCardBody className="pb-4">
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <h3>{question}</h3>
            </FormLabel>

            <RadioGroup
              aria-label="quiz"
              name="quiz"
              value={currQuestionSelectedOpt()}
              onChange={updateQtnAnswered}
            >
              {options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={index + 1}
                  control={<Radio />}
                  label={option}
                />
              ))}
              {currQuestionSelectedOpt.current}
            </RadioGroup>
          </FormControl>
        </MDBCardBody>

        <MDBCardFooter color="primary-color">
          <MDBRow between>
            <MDBCol size="auto">
              <MDBBtn
                color="indigo"
                disabled={currQuestionIndex === 0}
                onClick={prevQuestion}
              >
                <MDBIcon icon="chevron-left" className="mr-1" />
                PREVIOUS
              </MDBBtn>
              <MDBBtn color="indigo" onClick={resetQuestion}>
                Reset
              </MDBBtn>
              <MDBBtn
                color="indigo"
                disabled={currQuestionIndex === questionsData.length - 1}
                onClick={nextQuestion}
              >
                NEXT
                <MDBIcon icon="chevron-right" className="ml-1" />
              </MDBBtn>
            </MDBCol>
            <MDBCol size="auto">
              <MDBBtn color="indigo" onClick={() => dispatch(finishQuiz(questionsData, qtnAnswered))}>
                Finish Now
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardFooter>
      </MDBCard>

    </>
  );
};

export default QuestionBoard;
