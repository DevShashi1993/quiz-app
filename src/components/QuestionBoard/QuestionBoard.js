import React, { useRef, useEffect } from "react";
import { Jumbotron, Button, FormGroup, Label, Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  questionAnswered,
  resetQuestionAnswered
} from "../../store/Actions/QuestionBoardActions";

const QuestionBoard = ({ questionsData }) => {
  //const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
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
    if (index > -1)
      radiobtns.forEach((option, i) =>
        i + 1 === qtnAnswered[index].optionAnswered
          ? (option.checked = true)
          : (option.checked = false)
      );
    else radiobtns.forEach((option, i) => (option.checked = false));
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
    <>
      <Jumbotron>
        <Label>
          Question {<b>{currQuestionIndex + 1}</b>} of{" "}
          {<b>{questionsData.length}</b>}
        </Label>
        <h4>{question}:</h4>
        <hr className="my-2" />
        <div ref={radioRef} className="answers" tag="fieldset">
          {options.map((option, i) => (
            <FormGroup key={i} check>
              <Label check>
                <Input
                  id={`option_${i + 1}_${qid}`}
                  type="radio"
                  name={`option_${i + 1}_${qid}`}
                  onChange={() => updateQtnAnswered(qid, i + 1)}
                />
                {option}
              </Label>
            </FormGroup>
          ))}
        </div>
        <hr className="my-2" />
        <div>
          <Button className="mr-3" color="primary" onClick={prevQuestion}>
            Previous
          </Button>
          <Button className="mr-3" color="primary" onClick={resetQuestion}>
            Reset
          </Button>
          <Button className="mr-3" color="primary" onClick={nextQuestion}>
            Next
          </Button>
        </div>
      </Jumbotron>
    </>
  );
};

export default QuestionBoard;
