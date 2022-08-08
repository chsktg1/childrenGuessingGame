import { Component } from "react";

class Timer extends Component {
  state = { time: 30 };

  componentDidMount() {
    this.toClear = setInterval(this.tick, 1000);
  }

  tick = () => {
    this.setState((p) => ({ time: p.time - 1 }));
  };

  render() {
    const { time } = this.state;
    return <p>{time}</p>;
  }
}

export default Timer;
