import React, { Component, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBContainer } from "mdbreact";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Quiz from "./components/Quiz/Quiz";

const AppLayout = () => {
  return (
    <div>
      <header>
        <Router>
          <NavigationBar/>
        </Router>
      </header>

      <main className="p-4">
        <MDBContainer className="mt-5" fluid>
          <Quiz/>
        </MDBContainer>
      </main>
    </div>
  );
};

export default AppLayout;
