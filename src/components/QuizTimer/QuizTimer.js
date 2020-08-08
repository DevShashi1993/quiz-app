import React, { useState, useEffect, useCallback } from "react";
import CircularProgressBar from "../CircularProgressBar/CircularProgressBar";
import Timer from "react-compound-timer";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardFooter,
  MDBBtn,
  MDBRow,
  MDBCol
} from "mdbreact";
import "./QuizTimer.scss";

const QuizTimer = ({ totalTimeInSecs }) => {
  const [timerObj, setTimerObj] = useState({
    remainingTimeInSecs: totalTimeInSecs,
    remainingTimeInPercent: 0,
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  //const [seconds, setSeconds] = useState(totalTimeInSecs);

  function calcTimeToPercent(remainingTimeInSecs, totalTimeInSecs) {
    return (100 - (100 * remainingTimeInSecs) / totalTimeInSecs).toFixed(2);
  }

  function secsToHHMMSS(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let seconds = Math.ceil(divisor_for_minutes % 60);

    let obj = {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0")
    };
    return obj;
  }

  const calcTimerObj = useCallback(
    remainingTimeInSecs => {
      let remainingTimeInPercent = calcTimeToPercent(
        remainingTimeInSecs,
        totalTimeInSecs
      );

      let { hours, minutes, seconds } = secsToHHMMSS(remainingTimeInSecs);

      let timer_obj = {
        remainingTimeInSecs: remainingTimeInSecs,
        remainingTimeInPercent: remainingTimeInPercent,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
      return timer_obj;
    },
    [totalTimeInSecs]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      let {
        remainingTimeInSecs,
        remainingTimeInPercent,
        hours,
        minutes,
        seconds
      } = calcTimerObj(timerObj.remainingTimeInSecs - 1);

      setTimerObj(prevTimerObj => ({
        ...prevTimerObj,
        remainingTimeInSecs: remainingTimeInSecs,
        remainingTimeInPercent: remainingTimeInPercent,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      }));
    }, 1000);

    if (timerObj.seconds === -1 || timerObj.remainingTimeInPercent >= 100) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [calcTimerObj, timerObj, totalTimeInSecs]);

  return (
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
  );
};

export default QuizTimer;
