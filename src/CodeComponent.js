import React, { Component } from 'react';
import Colors from './Colors';
import ColorButton from './ColorButton';
import WordButton from './WordButton';

class CodeComponent extends Component {
  constructor(props){
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(value){
    if(this.props.onValueChanged){
      this.props.onValueChanged(value);
    }
  }


  render() {
    let makeButton = (color) => {
      let unselected = (this.props.value != null && this.props.value !== color.value);

      if(this.props.isColor){
        return <ColorButton color={color} unselected={unselected} onClick={this.handleButtonClick}/>
      } else {
        return <WordButton color={color} unselected={unselected} onClick={this.handleButtonClick}/>
      }
    }
    let buttons = Colors.map(makeButton);

    return <div className="Code">
      <div className="TerminalTitle">From Terminal {this.props.from}</div>
      {buttons}
    </div>
  }
}

export default CodeComponent; // Don’t forget to use export default!