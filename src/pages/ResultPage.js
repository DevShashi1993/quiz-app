import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Result from "../components/Result/Result";

const ResultPage = (props) => {
  const history = useHistory();
  const resultData = props.location.resultData;
  const { qtnAnswered } = useSelector((state) => state.questionState);
  //const { isQuizFinished } = useSelector((state) => state.quizState);

  if (!resultData) {
    history.push({
      pathname: "/",
    });
  }

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

export default ResultPage;
