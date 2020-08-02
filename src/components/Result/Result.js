import React, { useEffect } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import questionsData from "../../questionsData";

const Result = () => {
  const { qtnAnswered } = useSelector(state => state.questionState);

  const mergedList = (arr1, arr2) =>
    arr1.map(a1 => {
      Object.assign(a1, { optionAnswered: "na" });
      arr2.forEach(a2 => {
        if (a1.qid === a2.qid) Object.assign(a1, a2);
      });
      return a1;
    });

  let answerStatus;

  const checkAnswerStatus = (optionAnswered, correct_answer) => {
    console.log("sdgdgdfg");
    if (optionAnswered === "na") return optionAnswered;
    if (optionAnswered === correct_answer) return "Correct";
    else return "Wrong";
  };

  const resultData = mergedList(questionsData, qtnAnswered);

  useEffect(() => {
    console.log("resultData", resultData);
  }, []);

  return (
    <>
      <Container>
        <h1 className="text-center">Results</h1>
        <hr />
        <ListGroup>
          {resultData &&
            resultData.map(
              ({ options, optionAnswered, correct_answer, question }, i) => (
                <ListGroupItem
                  key={i}
                  color={
                    optionAnswered === correct_answer
                      ? "success"
                      : optionAnswered === "na"
                      ? ""
                      : "danger"
                  }
                >
                  <ListGroupItemHeading>
                    {`Q${i + 1}. ${question}`}
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    <b>You Answered:</b>{" "}
                    {`${
                      optionAnswered === "na"
                        ? "N/A"
                        : options[optionAnswered - 1]
                    }`}
                    <br />
                    <b>
                      {optionAnswered === correct_answer
                        ? "Correct!"
                        : optionAnswered === "na"
                        ? "Not Answered!"
                        : "Wrong !"}
                    </b>
                  </ListGroupItemText>
                </ListGroupItem>
              )
            )}
        </ListGroup>
      </Container>
    </>
  );
};

export default Result;
