import React, { Component } from 'react';
import './App.css';
import WordComponent from './WordComponent';
import CodeComponent from './CodeComponent';
import {Colors, ColorsRandom} from './Colors';
import Timer from './Timer.js';

let errorAudio = new Audio("./chord.wav");
let successAudio = new Audio("./tada.wav");


//Red, Orange, Yellow, Green, Blue, Purple
class App extends Component{
  constructor(props) {
    super(props);

    let seed = this.getSeed()
    let codes = this.getCodes(seed);

    let hash = window.location.hash.substr(1);
    let terminal = parseInt(hash);
    if(isNaN(terminal) || terminal > 3 || terminal < 1)
      terminal = Math.floor(Math.random() * 3) + 1;

    this.state = {
      terminal: terminal,
      codes: codes,
      seed: seed,
      selectedColorValue: null,
      selectedWordValue: null,
      isCorrect: false
    }


    this.handleColorSelected = this.handleColorSelected.bind(this);
    this.handleWordSelected = this.handleWordSelected.bind(this);
    this.timerEnded = this.timerEnded.bind(this);
  }

  getSeed(){
    return Math.floor(Date.now() / 30000);
  };

  getCodes(seed){
    return [
      {
// placeholder
      },
      {
        color: ColorsRandom[this.wrapValue2(seed+0)].color,
        word: ColorsRandom[this.wrapValue2(seed+1)].word,
      },
      {
        color: ColorsRandom[this.wrapValue2(seed+2)].color,
        word: ColorsRandom[this.wrapValue2(seed+3)].word
      },
      {
        color: ColorsRandom[this.wrapValue2(seed+4)].color,
        word: ColorsRandom[this.wrapValue2(seed+5)].word
      },
    ];
  }

  getAnswer(terminal, codes){
    let colorFrom = this.wrapValue(terminal + 1);
    let wordFrom = this.wrapValue(terminal - 1);
    let color = codes[colorFrom].color;
    let word = codes[wordFrom].word;

    return {
      colorFrom: colorFrom,
      wordFrom: wordFrom,
      color: color,
      word: word,
    }
  }

  wrapValue(value){
    if(value < 1){
      return 3;
    }
    if(value > 3){
      return 1;
    }
    return value;
  }

  wrapValue2(value){
    return value = value % 6;
  }

  handleColorSelected(value){
    this.setState({selectedColorValue: value});
    this.checkAnswer(value, this.state.selectedWordValue);
  }

  handleWordSelected(value){
    this.setState({selectedWordValue: value});
    this.checkAnswer(this.state.selectedColorValue, value);
  }

  checkAnswer(selectedColorValue, selectedWordValue){
    let answer = this.getAnswer(this.state.terminal, this.state.codes);
    console.log(answer, this.state);

    if(selectedColorValue == null || selectedWordValue == null){
      return;
    }
    
    let word = Colors[selectedWordValue].word;
    let color = Colors[selectedColorValue].color;
    if(answer.word === word && answer.color === color){
      this.setState({isCorrect:true})
      successAudio.play();
    } else {
      this.resetSelections(true);
    }
  }

  resetSelections(playSound){
    this.setState({selectedColorValue: null, selectedWordValue: null, isCorrect: false })
    if(playSound){
      errorAudio.play();
    }
  }

  timerEnded() {
    let seed = this.getSeed()
    let codes = this.getCodes(seed);
    this.setState({codes:codes, seed: seed});
    let playSound = this.state.selectedColorValue != null || this.state.selectedWordValue != null
    this.resetSelections(playSound);
  }

  render() {
    let code = this.state.codes[this.state.terminal];
    let answer = this.getAnswer(this.state.terminal, this.state.codes);

    let bottom = <div class="Success">Access Granted</div>;
    if(!this.state.isCorrect){
      bottom = <>
        <CodeComponent isColor={true} from={answer.colorFrom} value={this.state.selectedColorValue} onValueChanged={this.handleColorSelected} />
        <CodeComponent isColor={false} from={answer.wordFrom} value={this.state.selectedWordValue} onValueChanged={this.handleWordSelected}  />
      </>;
    }

    return (
      <div className="App">
        <div className="TerminalTitle">Terminal {this.state.terminal}</div>
        <WordComponent code={code} />
        <Timer seconds="30" timerEnded={this.timerEnded}></Timer>
        {bottom}
      </div>
    );
  }
}

export default App;
