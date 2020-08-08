import React, { useState } from "react";
import {
  MDBContainer,
  MDBEdgeHeader,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBJumbotron
} from "mdbreact";
import SectionContainer from "./../components/sectionContainer";
import "./HomePage.css";

const DefaultView = ({switchView}) => {
  return (
    <>
      <div className="mt-3 mb-5">
        <MDBContainer className="mt-5 text-center">
          <MDBRow>
            <MDBCol>
              <MDBJumbotron>
                <h2 className="h1 display-3">Welcome to Quiz App</h2>
                <p className="lead">
                  This is a simple hero unit, a simple Jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <hr className="my-2" />
                <p>
                  It uses utility classes for typgraphy and spacing to space
                  content out within the larger container.
                </p>
                <p className="lead">
                  <MDBBtn color="primary" onClick={() => switchView('view1')}>Let's Start</MDBBtn>
                </p>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

const View1 = ({switchView}) => {
  return (
    <>
      <div className="mt-3 mb-5">
      <MDBContainer>
        <MDBRow>
        <h2 className="h1 display-3">View 1</h2>
          <p className="lead">
            <MDBBtn color="primary" onClick={() => switchView('view2')}>Let's Start</MDBBtn>
          </p>
          <MDBCol lg="8">col-lg-8</MDBCol>
          <MDBCol lg="4">col-lg-4</MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
    </>
  );
};

const View2 = ({switchView}) => {
  return (
    <>
      <div className="mt-3 mb-5">
        <MDBContainer className="mt-5 text-center">
          <MDBRow>
            <MDBCol>
              <MDBJumbotron>
                <h2 className="h1 display-3">View 2</h2>
                <p className="lead">
                  <MDBBtn color="primary" onClick={() => switchView('default')}>Let's Start</MDBBtn>
                </p>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

const HomePage = () => {
  const [renderView, setRenderView] = useState(0);

  const switchView = (view) => {
    setRenderView(view);
  }

  switch (renderView) {
    case 'view1':
      return <View1 switchView={switchView} />;
    case 'view2':
      return <View2 switchView={switchView} />;
    default:
      console.log('default called');
      
      return <DefaultView switchView={switchView} />;
  }
};

export default HomePage;
