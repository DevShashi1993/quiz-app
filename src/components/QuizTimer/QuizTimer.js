import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import CircularProgressBar from "../CircularProgressBar/CircularProgressBar";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardFooter, MDBModal,MDBCardText,MDBBtn } from "mdbreact";
import { finishQuiz } from "../../store/Actions/QuizActions";
import "./QuizTimer.scss";

const QuizTimer = ({ quizDurationInSecs, questionsData, remainingTimeInSecs }) => {
  const dispatch = useDispatch();
  const { qtnAnswered } = useSelector((state) => state.questionState);
  const [showFinishModal, setShowFinishModal] = useState(false);

  const [timerObj, setTimerObj] = useState({
    quizDurationInSecs: quizDurationInSecs,
    remainingTimeInSecs: remainingTimeInSecs,
    remainingTimeInPercent: 0,
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const calcTimeToPercent = (remainingTimeInSecs, quizDurationInSecs) => {
    return (100 - (100 * remainingTimeInSecs) / quizDurationInSecs).toFixed(2);
  }

  const secsToHHMMSS = (secs) => {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let seconds = Math.ceil(divisor_for_minutes % 60);

    let obj = {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
    return obj;
  }

  const calcTimerObj = useCallback(
    (remainingTimeInSecs) => {
      let remainingTimeInPercent = calcTimeToPercent(
        remainingTimeInSecs,
        quizDurationInSecs
      );

      let { hours, minutes, seconds } = secsToHHMMSS(remainingTimeInSecs);

      let timer_obj = {
        quizDurationInSecs: quizDurationInSecs,
        remainingTimeInSecs: remainingTimeInSecs,
        remainingTimeInPercent: remainingTimeInPercent,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      };
      return timer_obj;
    },
    [quizDurationInSecs]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      let {
        quizDurationInSecs,
        remainingTimeInSecs,
        remainingTimeInPercent,
        hours,
        minutes,
        seconds,
      } = calcTimerObj(timerObj.remainingTimeInSecs - 1);

      setTimerObj((prevTimerObj) => ({
        ...prevTimerObj,
        quizDurationInSecs: quizDurationInSecs,
        remainingTimeInSecs: remainingTimeInSecs,
        remainingTimeInPercent: remainingTimeInPercent,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      }));
    }, 1000);

    if (timerObj.seconds === -1 || timerObj.remainingTimeInPercent >= 100) {
      clearInterval(interval);
      setShowFinishModal(true);
    }

    return () => clearInterval(interval);
  }, [calcTimerObj, timerObj, quizDurationInSecs]);

  return (
    <>
      <MDBCard className="text-center w-100">
        <MDBCardHeader color="primary-color">
          <strong>Time Status:</strong>
        </MDBCardHeader>
        <MDBCardBody>
          <div id="progressBar-container">
            <CircularProgressBar
              strokeWidth="10"
              sqSize="200"
              percentage={timerObj.remainingTimeInPercent}
              text={`${timerObj.hours}:${timerObj.minutes}:${timerObj.seconds}`}
            />
          </div>
        </MDBCardBody>
        <MDBCardFooter color="primary-color">
          Total Time <strong>00:10:00</strong>
        </MDBCardFooter>
      </MDBCard>

      <MDBModal isOpen={showFinishModal} backdrop={true} toggle={() => true} centered>
        <MDBCard className="text-center">
          <MDBCardHeader color="danger-color">
            <h3>Time's Up !!</h3>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardText>
              Oops...Time's Up
              <br />
              We hope you have answered your questions well in Time.
              <br />
              Click on View result to view your Score Card.
            </MDBCardText>
            <MDBBtn
              color="danger"
              size="sm"
              onClick={() => dispatch(finishQuiz(questionsData, qtnAnswered))}
            >
              View Result
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBModal>
    </>
  );
};

export default QuizTimer;
