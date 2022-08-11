import { Component } from "react";

class Timer extends Component {
  state = { time: 30 };

  componentDidMount() {
    this.toClear = setInterval(this.tick, 1000);
  }

  tick = () => {
    var { time } = this.state;
    if (time === 0) {
      console.log(this.toClear);
      clearInterval(this.toClear);
      const { gameOver } = this.props;
      gameOver();
      this.setState({ time: 30 });
    } else {
      this.setState({ time: time - 1 });
    }
  };

  render() {
    const { time } = this.state;
    return <p style={{ marginTop: "30px" }}>Time left: {time}</p>;
  }
}

export default Timer;
