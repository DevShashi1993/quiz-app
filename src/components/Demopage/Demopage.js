import React from "react";
import questionsData from "../../questionsData";
import QuestionBoard from "../QuestionBoard/QuestionBoard";
import QuizTimer from "../QuizTimer/QuizTimer";
import QuestionPallete from "../QuestionPallete/QuestionPallete";
import { useSelector, useDispatch } from "react-redux";
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBJumbotron,
  MDBCardTitle,
  MDBIcon,
  MDBContainer
} from "mdbreact";

const Demopage = () => {
  //const { qtnAnswered, currQuestionIndex } = useSelector(state => state.questionState);
  const { quizDurationInSecs } = useSelector((state) => state.quizState);
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
      <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol md="12">
          <MDBJumbotron>
            <h2 className="h1 display-3">Hello, world!</h2>
            <p className="lead">
              This is a simple hero unit, a simple Jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-2" />
            <p>
              It uses utility classes for typgraphy and spacing to space content out
              within the larger container.
            </p>
            <p className="lead">
              <MDBBtn color="primary">Learn More</MDBBtn>
            </p>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  );
};

export default Demopage;
