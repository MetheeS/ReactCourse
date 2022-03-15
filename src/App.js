import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import User from "./user/User";

class App extends Component {
  state = {
    name: "SKC",
  };

  onNameChange = (name) => {
    this.setState({ name: name });
  };
  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with {name}
          </a>
          <User name={name} onNameChange={this.onNameChange} />
        </header>
      </div>
    );
  }
}

export default App;
