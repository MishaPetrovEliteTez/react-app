import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Wallet from "./components/main/Wallet";
import Import from "./components/Import";
import Export from "./components/Export";
import Send from "./components/Send";
import Main from "./components/main/Main";

import WebFont from 'webfontloader';

WebFont.load({google: {families: ["Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic", "Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic", "Quicksand:300,regular,500,700"]}});

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
            currentPage: {
                page: "Login",
                subPage: ""
            }
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
        switch (this.state.currentPage.page) {
            case "Login":
                return <Login changeState={this.changeState}/>;
            case "Main":
                return <Main changeState={this.changeState} state={this.state}/>;
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
