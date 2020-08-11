import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  MDBTypography,
  MDBIcon,
  MDBBtn,
  MDBModal,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
} from "mdbreact";

const Result = ({ resultData }) => {
  const [showModal, setShowModal] = useState(true);
  const { qtnAnswered } = useSelector((state) => state.questionState);
  let correctCounter = 0;
  const toggleModal = () => {
    let newModalvalue = !showModal;
    setShowModal(newModalvalue);
  };

  const setnoteColor = (optionAnswered, correct_answer) => {
    return optionAnswered === correct_answer
      ? "success"
      : optionAnswered === "na"
      ? "secondary"
      : "danger";
  };

  const setanswerstatus = (optionAnswered, correct_answer) => {
    let isCorrect = null;
    isCorrect =
      optionAnswered === correct_answer
        ? true
        : optionAnswered === "na"
        ? null
        : false;

    if (isCorrect) {
      correctCounter++;
      return (
        <>
          <b>{"Correct!"}</b> <MDBIcon icon="check" className="mr-1" />
        </>
      );
    } else if (isCorrect === false) {
      return (
        <>
          <b>{"Wrong!"}</b> <MDBIcon icon="times" className="mr-1" />
        </>
      );
    } else {
      return (
        <>
          <b>{"Not Answered!"}</b>{" "}
          <MDBIcon icon="exclamation" className="mr-1" />
        </>
      );
    }
  };

  useEffect(() => {
    //console.log("resultData", props.location.resultData);
  }, [resultData]);

  return (
    <>
      {resultData &&
        resultData.map(
          ({ options, optionAnswered, correct_answer, question }, i) => (
            <MDBTypography
              key={i}
              note
              noteColor={setnoteColor(optionAnswered, correct_answer)}
              noteTitle={`Q${i + 1}. ${question}`}
            >
              <br />
              <b>You Answered:</b>{" "}
              {`${
                optionAnswered === "na" ? "N/A" : options[optionAnswered - 1]
              }`}
              <br />
              {setanswerstatus(optionAnswered, correct_answer)}
            </MDBTypography>
          )
        )}

      <MDBModal
        isOpen={showModal}
        toggle={toggleModal}
        backdrop={true}
        centered
      >
        <MDBCard className="text-center">
          <MDBCardHeader color="success-color">
            <h3>Congratulations...!</h3>
          </MDBCardHeader>
          <MDBCardBody>
            <h5>{`You Scored ${correctCounter}/${resultData.length}`}</h5>
            <MDBBtn color="success" size="sm" onClick={toggleModal}>
              Close
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBModal>
    </>
  );
};

export default Result;
