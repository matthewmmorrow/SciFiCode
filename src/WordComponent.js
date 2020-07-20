import React, { Component } from 'react';

class WordComponent extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  finished() {

  }

  render() {
    return <div className="Word" style={{color:this.props.code.color}}>{this.props.code.word}</div>
  }
}

export default WordComponent; // Don’t forget to use export default!