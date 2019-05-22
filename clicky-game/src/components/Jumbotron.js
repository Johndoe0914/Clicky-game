import React from "react";
import "./Jumbotron.css";
import { Jumbotron } from 'react-bootstrap';
import { Container } from "react-bootstrap";


function jumbo() {

       return (
        <Jumbotron fluid className="jumbotron">
  <Container>
    <h1>Memory Game</h1>
    <br></br>
    <p>
      Click on an image to earn points, but dont click more than once!
    </p>
  </Container>
</Jumbotron>
       )
};


export default jumbo;