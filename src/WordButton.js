import React, { Component } from 'react';

let buttonAudio = new Audio("./button.wav");

class WordButton extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    buttonAudio.play();
    if(this.props.onClick){
      this.props.onClick(this.props.color.value);
    }
  }
  
  render() {
    return <button className={"WordButton" + (this.props.unselected ? " unselected" : "")} onClick={this.handleClick} >
      {this.props.color.word}
    </button>
  }
}

export default WordButton; // Don’t forget to use export default!