
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";

const NavigationBar = () => {
  const history = useHistory();
  const [collapse, setCollapse] = useState(false);
  const [isWideEnough, setIsWideEnough] = useState(false);

  const toggleNavBar = () => {
    setCollapse(!collapse);
  };

  const logout = () => {
    history.push({
      pathname: "/login",
    });
  };

  return (
          <MDBNavbar color="indigo" dark expand="md" fixed="top">
            <MDBNavbarBrand href="/">
              <strong>Quiz App</strong>
            </MDBNavbarBrand>
            {!isWideEnough && <MDBNavbarToggler onClick={toggleNavBar} />}
            <MDBCollapse isOpen={collapse} navbar>
              <MDBNavbarNav right>
                <MDBNavItem active>
                  <MDBNavLink to="/login" onClick={logout} >
                    Log Out
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
  );
};

export default NavigationBar;
