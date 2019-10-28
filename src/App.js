import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Wallet from "./components/Wallet";
import Import from "./components/Import";
import Export from "./components/Export";
import Send from "./components/Send";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

/*function App() {
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
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: "Login"
        };
        this.changeState = this.changeState.bind(this)
    }

    changeState = (state) => {
        this.setState(() => {
          console.log("click");
            return {
                currentPage: state
            }
        })
    };

    render() {
        switch (this.state.currentPage) {
            case "Login":
                return <Login changeState={this.changeState}/>;
            case "Wallet":
                return <Wallet/>;
            case "Import":
                return <Import/>;
            case "Export":
                return <Export/>;
            case "Send":
                return <Send/>;
            default:
                return <Welcome/>
        }
    }
}

export default App;
