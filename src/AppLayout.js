import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MDBContainer } from "mdbreact";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Quiz from "./components/Quiz/Quiz";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import Signup from "./pages/Signup";

const AppLayout = () => {
  return (
    <>
      <header>
        <Router>
          <NavigationBar />
        </Router>
      </header>

      <main className="p-4">
        <MDBContainer className="mt-5" fluid>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={LoginPage} />
            <Route path="/result" component={ResultPage} />
            <Route
              render={function() {
                return <h1>Not Found</h1>;
              }}
            />
          </Switch>
        </MDBContainer>
      </main>
    </>
  );
};

export default AppLayout;
