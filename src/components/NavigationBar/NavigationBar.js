
import React, { Component, useState } from "react";
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
  const [collapse, setCollapse] = useState(false);
  const [isWideEnough, setIsWideEnough] = useState(false);

  const toggleNavBar = () => {
    setCollapse(!collapse);
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
                  <MDBNavLink to="#">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#">Link</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#">Profile</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon="user" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">
                        Another Action
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!">
                        Something else here
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!">
                        Something else here
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
  );
};

export default NavigationBar;
