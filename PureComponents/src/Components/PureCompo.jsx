import { Component } from "react";

export default class PureCompo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      toggle: false,
    };
  }
  toggleToggle = () => {
    if (this.state.toggle == true) {
      this.setState({ ...this.state, count: this.state.count + 1 });
    }
  };

  toggleCounter = () => {
    this.setState({ ...this.state, toggle: !this.state.toggle });
  };

  render() {
    console.log("PureCompo", this.state.count, this.state.toggle);
    return (
      <div>
        <h1>PureComponent</h1>
        <h2>{this.state.count}</h2>
        <br />
        <button onClick={this.toggleToggle}>Set TOggle</button>
        <button onClick={this.toggleCounter}>Set Counter</button>
      </div>
    );
  }
}
