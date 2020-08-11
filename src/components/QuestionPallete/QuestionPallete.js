import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { changeQuestion } from "../../store/Actions/QuestionBoardActions";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBBtn,
} from "mdbreact";
import './QuestionPallete.scss';

const QuestionPallete = ({ questionsData }) => {
  const dispatch = useDispatch();
  const { qtnAnswered, currQuestionIndex } = useSelector(
    (state) => state.questionState
  );

  const isQtnAnswered = (qtn) => {
    let index = qtnAnswered.findIndex((q) => q.qid === qtn.qid);
    return index !== -1 ? true : false;
  };

  useEffect(() => {}, []);

  return (
    <MDBCard className="text-center w-100 justify-content mt-4">
      <MDBCardHeader color="primary-color">
        <strong>Question Pallete</strong>
      </MDBCardHeader>
      <MDBCardBody>
        {questionsData.map((qtn, index) => (
          <MDBBtn
            key={index}
            className="quiz-pallete-btn"
            color={
              currQuestionIndex === index
                ? "primary"
                : isQtnAnswered(qtn)
                ? "light-green"
                : "light"
            }
            size="sm"
            onClick={() => dispatch(changeQuestion(index))}
          >
            {index + 1}
          </MDBBtn>
        ))}
      </MDBCardBody>
    </MDBCard>
  );
};

export default QuestionPallete;
