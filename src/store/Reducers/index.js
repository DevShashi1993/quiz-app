import questionReducer from './QuestionReducer';
import counterReducer from './CounterReducer';
import quizReducer from './QuizReducer';



// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    questionState: questionReducer,
    counterState: counterReducer,
    quizState: quizReducer
};