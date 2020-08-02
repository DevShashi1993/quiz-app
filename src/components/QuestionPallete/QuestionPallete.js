import React , {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { changeQuestion } from "../../store/Actions/QuestionBoardActions";

const QuestionPallete = ({noOfQuestions}) => {
  
  const dispatch = useDispatch();
  const { currQuestionIndex } = useSelector(
    state => state.questionState
  );

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

  useEffect(() => {
    
  },[]);

  return (
    <>
      <Pagination size="lg" aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink first onClick={() => dispatch(changeQuestion(0))} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous onClick={prevQuestion} />
        </PaginationItem>

        {PaginationElemnets}

        <PaginationItem>
          <PaginationLink next onClick={nextQuestion} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last onClick={() => dispatch(changeQuestion(noOfQuestions - 1))} />
        </PaginationItem>
      </Pagination>
    </>
  );
};

export default QuestionPallete;
