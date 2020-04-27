import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBJumbotron,
} from "mdbreact";
import { initQuiz } from "../store/Actions/QuizActions";
import "./HomePage.css";
import Quiz from "../components/Quiz/Quiz";
import Result from "../components/Result/Result";

const DefaultView = ({ switchView }) => {
  const dispatch = useDispatch();
  const defaultUserData = { firstname: "Shashikant", lastname: "Sharma" };

  return (
    <>
      <div className="mt-3 mb-5">
        <MDBContainer className="mt-5 text-center">
          <MDBRow>
            <MDBCol>
              <MDBJumbotron>
                <h2 className="h1 display-3">Welcome to Quiz App</h2>
                <p className="lead"></p>
                <hr className="my-2" />
                <div className="text-left">
                <p className="lead">
                <b>Instructions:</b>
                </p>
                <ul>
                  <li>Total number of questions : 20.</li>
                  <li>Time alloted : 10 minutes.</li>
                  <li>Each question carry 1 mark, no negative marks.</li>
                  <li><b>Do not refresh the page, once you have started the quiz.</b></li>
                  <li>All the best :).</li>
                </ul>
                </div>
                <p className="lead">
                  <MDBBtn
                    color="primary"
                    onClick={() => dispatch(initQuiz(defaultUserData))}
                  >
                    Let's Start
                  </MDBBtn>
                </p>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

const Quizview = ({ switchView }) => {
  return (
    <>
      <Quiz />
    </>
  );
};

const Resultview = ({ resultData }) => {
  return (
    <>
      {resultData && (
        <>
          <h1 className="text-center">Welcome to Result page</h1>
          <Result resultData={resultData} />
        </>
      )}
    </>
  );
};

const HomePage = () => {
  //const [renderView, setRenderView] = useState(null);
  const dispatch = useDispatch();
  const { isQuizStarted, isQuizFinished, resultData, quizDurationInSecs } = useSelector((state) => state.quizState);
  const defaultUserData = { firstname: "Shashikant", lastname: "Sharma" };
  
  let localData = localStorage.getItem("quizData");
  let prevQuizStarting = localData ? JSON.parse(localData).startTime : null;
  prevQuizStarting = new Date(prevQuizStarting);
  console.log("prevQuizStarting",prevQuizStarting ); 
  let currenTime = new Date();
  let quizTimeDiff = ((currenTime - prevQuizStarting) / 1000);
  console.log("quizTimeDiff",quizTimeDiff); 
  const isQuizContinuing = (quizTimeDiff <= parseFloat(quizDurationInSecs)) ? true : false;
  console.log("currenTime",currenTime ); 
  console.log("isQuizContinuing",isQuizContinuing ); 

  if (isQuizStarted &&  isQuizFinished && resultData) {
    console.log("1st condition called"); 
    return <Resultview resultData={resultData} />;
  }
   else if (isQuizStarted) { 
    console.log("2nd condition called"); 
    //dispatch(initQuiz(defaultUserData));
    return <Quizview  />;
  } else {
    console.log("3rd condition called"); 
    return <DefaultView />;
  }
};

export default HomePage;
