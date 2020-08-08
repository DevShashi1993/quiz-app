import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { changeQuestion } from "../../store/Actions/QuestionBoardActions";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBBtn,
  MDBRow,
  MDBCol
} from "mdbreact";

const QuestionPallete = ({ noOfQuestions }) => {
  const dispatch = useDispatch();
  const { currQuestionIndex } = useSelector(state => state.questionState);

  const prevQuestion = () => {
    if (currQuestionIndex !== 0) {
      dispatch({ type: "PREV_QTN" });
      resetQuestion();
    }
  };

  const nextQuestion = () => {
    if (currQuestionIndex !== noOfQuestions - 1) {
      dispatch({ type: "NEXT_QTN" });
      resetQuestion();
    }
  };

  const resetQuestion = () => {
    let radiobtns = document.querySelectorAll("div.answers label input");
    radiobtns.forEach((option, i) => (option.checked = false));
  };

  let PaginationElemnets = [];

  for (let i = 0; i < noOfQuestions; i++) {
    PaginationElemnets.push(
      <PaginationItem key={i} active={currQuestionIndex === i}>
        <PaginationLink onClick={() => dispatch(changeQuestion(i))}>
          {i + 1}
        </PaginationLink>
      </PaginationItem>
    );
  }

  useEffect(() => {}, []);

  return (
    <MDBCard className="text-center w-100 justify-content mt-4">
      <MDBCardHeader color="primary-color">
        <strong>Question Pallete</strong>
      </MDBCardHeader>
      <MDBCardBody>
        <MDBRow center>
          <MDBCol size="2">
            <MDBBtn color="success" size="sm">
              1
            </MDBBtn>
          </MDBCol>
          <MDBCol size="2">
            <MDBBtn color="danger" size="sm">
              2
            </MDBBtn>
          </MDBCol>
          <MDBCol size="2">
            <MDBBtn color="success" size="sm">
              3
            </MDBBtn>
          </MDBCol>
          <MDBCol size="2">
            <MDBBtn color="success" size="sm">
              4
            </MDBBtn>
          </MDBCol>
          <MDBCol size="2">
            <MDBBtn color="warning" size="sm">
              5
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <MDBRow center>
          <MDBCol size="2">
            <MDBBtn color="success" size="sm">
              6
            </MDBBtn>
          </MDBCol>
          <MDBCol size="2">
            <MDBBtn color="success" size="sm">
              7
            </MDBBtn>
          </MDBCol>
          <MDBCol size="2">
            <MDBBtn color="danger" size="sm">
              8
            </MDBBtn>
          </MDBCol>
          <MDBCol size="2">
            <MDBBtn color="warning" size="sm">
              9
            </MDBBtn>
          </MDBCol>
          <MDBCol size="2">
            <MDBBtn color="danger" size="sm">
              10
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <MDBRow center>
          <MDBCol size="2">
            <MDBBtn color="danger" size="sm">
              11
            </MDBBtn>
          </MDBCol>
          <MDBCol size="2">
            <MDBBtn color="success" size="sm">
              12
            </MDBBtn>
          </MDBCol>
          <MDBCol size="2">
            <MDBBtn color="blue-grey" size="sm">
              13
            </MDBBtn>
          </MDBCol>
          <MDBCol size="2">
            <MDBBtn color="blue-grey" size="sm">
              14
            </MDBBtn>
          </MDBCol>
          <MDBCol size="2">
            <MDBBtn color="blue-grey" size="sm">
              15
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <MDBRow center>
          <MDBCol size="2">
            <MDBBtn color="blue-grey" size="sm">
              16
            </MDBBtn>
          </MDBCol>
          <MDBCol size="2">
            <MDBBtn color="blue-grey" size="sm">
              17
            </MDBBtn>
          </MDBCol>
          <MDBCol size="2">
            <MDBBtn color="blue-grey" size="sm">
              18
            </MDBBtn>
          </MDBCol>
          <MDBCol size="2">
            <MDBBtn color="blue-grey" size="sm">
              19
            </MDBBtn>
          </MDBCol>
          <MDBCol size="2">
            <MDBBtn color="blue-grey" size="sm">
              20
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default QuestionPallete;
