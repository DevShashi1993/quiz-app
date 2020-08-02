import React from "react";
import questionsData from "../../questionsData";
import QuestionBoard from "../QuestionBoard/QuestionBoard";
import QuestionPallete from "../QuestionPallete/QuestionPallete";
import QuizTimer from "../QuizTimer/QuizTimer";
import { Container, Col, Row } from "reactstrap";

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
      <Container>
        <Row>
          <Col className="col-8">
            <h1>Welcome to Quiz App</h1>
          </Col>
          <Col className="col-4">
            <QuizTimer questionsData={questionsData}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <QuestionBoard questionsData={questionsData} />
          </Col>
        </Row>
        <Row>
          <Col>
            <QuestionPallete noOfQuestions={questionsData.length} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Quiz;