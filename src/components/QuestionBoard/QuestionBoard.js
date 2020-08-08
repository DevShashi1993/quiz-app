import React, { useRef, useEffect } from "react";
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
import {
  questionAnswered,
  resetQuestionAnswered
} from "../../store/Actions/QuestionBoardActions";

const QuestionBoard = ({ questionsData }) => {
  const dispatch = useDispatch();
  const radioRef = useRef(null);
  const { qtnAnswered, currQuestionIndex } = useSelector(
    state => state.questionState
  );
  const { qid, question, options } = questionsData[currQuestionIndex];

  useEffect(() => {
    console.log("questionsData", questionsData);
    let radiobtns = document.querySelectorAll("div.answers label input");
    const index = qtnAnswered.findIndex(obj => obj.qid === qid);
    if (index > -1) {
      radiobtns.forEach((option, i) =>
        i + 1 === qtnAnswered[index].optionAnswered
          ? (option.checked = true)
          : (option.checked = false)
      );
    }
    else{
      radiobtns.forEach((option, i) => (option.checked = false));
    } 
  });

  const updateQtnAnswered = (qid, optAnswered) => {
    // console.log("Question Answered", qid);
    dispatch(questionAnswered(qid, optAnswered));
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

  // const isAnswered = (qid,id) => {
  //   return true;
  // };

  return (
    <MDBCard>
      <MDBCardHeader color="primary-color" tag="h3">
        Question {<b>{currQuestionIndex + 1}</b>} of{" "}
        {<b>{questionsData.length}</b>}
      </MDBCardHeader>
      <MDBCardBody className="pb-4">
        <FormControl component="fieldset">
          <FormLabel component="legend">
            <h3>{question}:</h3>
          </FormLabel>
          <RadioGroup
            aria-label="quiz-option"
            name="quiz-option"
            defaultValue=""
          >
            {options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={index + 1}
                id={`option_${index + 1}_${qid}`}
                name={`option_${index + 1}_${qid}`}
                control={ <Radio/> }
                onChange={() => updateQtnAnswered(qid, index + 1)}
                label={option}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </MDBCardBody>

      <MDBCardFooter color="primary-color">
        <MDBRow between>
          <MDBCol size="auto">
            <MDBBtn color="indigo" disabled={currQuestionIndex === 0} onClick={prevQuestion}>
              <MDBIcon icon="chevron-left" className="mr-1" />
              PREVIOUS
            </MDBBtn>
            <MDBBtn color="indigo" onClick={resetQuestion}>Reset</MDBBtn>
            <MDBBtn color="indigo" disabled={currQuestionIndex === (questionsData.length - 1)} onClick={nextQuestion}>
              NEXT
              <MDBIcon icon="chevron-right" className="ml-1" />
            </MDBBtn>
          </MDBCol>
          <MDBCol size="auto">
            <MDBBtn color="indigo">Finish Now</MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCardFooter>
    </MDBCard>
  );
};

export default QuestionBoard;
