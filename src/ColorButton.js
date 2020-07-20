import React, { Component } from 'react';

let buttonAudio = new Audio("./button.wav");

class ColorButton extends Component {
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
    return <button className={"ColorButton" + (this.props.unselected ? " unselected" : "")} style={{backgroundColor:this.props.color.color}} onClick={this.handleClick}>
      
    </button>
  }
}

export default ColorButton; // Don’t forget to use export default!