import React from "react";
import "./header.css";
import { Navbar } from 'react-bootstrap';


function Header (props) {
  
       return (
        <Navbar fixed="top"className="Navbar">
        <Navbar.Brand >Memory Game</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center">
          <Navbar.Text>
        {props.warning}
          </Navbar.Text>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Score: {props.score} || Top Score: {props.topscore}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
       )
};


export default Header;