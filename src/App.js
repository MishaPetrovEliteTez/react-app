import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Wallet from "./components/Wallet";
import Import from "./components/Import";
import Export from "./components/Export";
import Send from "./components/Send";

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
            currentPage: "Send"
        };
        this.changeState = this.changeState.bind(this)
    }

    changeState = () => {
        this.setState(() => {
          console.log("click");
            return {
                currentPage: "Login"
            }
        })
    };

    render() {
        switch (this.state.currentPage) {
            case "Login":
                return <Login/>;
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
