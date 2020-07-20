import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remaining: null
    };

    this.intervalHandle = null;

    this.tick = this.tick.bind(this);
    this.start = this.start.bind(this);
    this.ended = this.ended.bind(this);

    this.start();
  }

  start(){
    this.startTime = Math.floor(Date.now() / 1000 / this.props.seconds) * 1000 * this.props.seconds ;
    this.intervalHandle = setInterval(this.tick, 50);
  }

  ended(){
    clearInterval(this.intervalHandle);
    if(this.props.timerEnded){
      this.props.timerEnded();
    }
    this.start();
  }

  tick() {
    let remaining = this.getRemaining();
    this.setState({remaining: remaining});
    if(remaining <= 0){
      this.ended();
    }
  }

  getRemaining(){
    let elapsed = Date.now() - this.startTime;
    let remaining = this.props.seconds - (elapsed / 1000);
    return remaining;
  }

  addBar(index, remaining){
    let className = "TimerSegment" + ( index >= remaining ? " unselected" : "")
    return <div className={className}></div>;
  }

  render() {
    var remaining = Math.round(this.state.remaining);
    var segments = [...Array(10).keys()].map((val)=>this.addBar(val, remaining));
    return (
      <div className="TimerBar">
        {segments}
      </div>
    );
  }
}

export default Timer;
