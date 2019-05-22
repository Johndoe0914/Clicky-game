import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import Jumbo from "./components/Jumbotron";
import "./components/imagecards.css";
import Card from "./components/imagecards";
import images from "./components/images.js";


function shuffleImages(array){
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  state={
    images: images,
    score: 0,
    topscore: 0,
    warning: "click an image to begin",
    clicked: [],

  };
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1){
      this.handleIncrement();
      this.setState({ clicked : this.state.clicked.concat(id)})
    } else {
      
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.score + 1;

    this.setState({
      score: newScore,
      warning: "You guessed correctly"
    });

    if(newScore >= this.state.topscore) {
      this.setState({ topscore: newScore,
        warning: "New Topscore"
      })
    } 
    else if (newScore === 12) {
      this.setState({ warning: "You win"})
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      score: 0,
      topscore: this.state.topscore,
      warning: "You guessed incorrectly, Try again ",
      clicked: []
    });

    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledImages = shuffleImages(this.state.images);
    this.setState({ images: shuffledImages});
  };


  render() {
    return (
     <div className="wrapper">
       <Header warning={this.state.warning} score={this.state.score} topscore={this.state.topscore} />
       <Jumbo />
       <div className="imagesContainer">
       {this.state.images.map(image => (
          <Card handleClick={this.handleClick}  key={image.id} id={image.id} alt={image.alt} src={image.image} />
       ))}
       </div>
      
      </div>
    );
  }
};

export default App;
