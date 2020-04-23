import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }

  render() {
    return (
      <div>
        <p><h2>Here is expression =</h2> {7*7} </p>
        <h2 >Counter Demo</h2>
        <button onClick={this.IncrementItem}>Click to increment by 1</button>
        <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
        { this.state.show ? <h2 >Counter ={ this.state.clicks }</h2> : '' }
      </div>
    );
  }
}

export default App;