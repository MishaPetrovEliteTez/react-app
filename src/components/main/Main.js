import React from 'react';
import '../../assets/css/common.css'
import '../../assets/css/chain-wallet-extension.webflow.css'

import WebFont from 'webfontloader';
import MainMenu from "./MainMenu";
import Wallet from "./Wallet";
import Account from "./Account";
import Delegate from "./Delegate";
import Manage from "./Manage";
import Welcome from "../Welcome";

WebFont.load({google: {families: ["Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic", "Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic", "Quicksand:300,regular,500,700"]}});

const Main = (props) => {
    switch (props.state.currentPage.subPage) {
        case "Account":
            return <div className="phone-app">
                <Account changeState={props.changeState}/>
                <MainMenu currentPage={props.state.currentPage} changeState={props.changeState}/>
            </div>;
        case "Wallet":
            return <div className="phone-app">
                <Wallet changeState={props.changeState}/>
                <MainMenu currentPage={props.state.currentPage} changeState={props.changeState}/>
            </div>;
        case "Delegate":
            return <div className="phone-app">
                <Delegate/>
                <MainMenu currentPage={props.state.currentPage} changeState={props.changeState}/>
            </div>;
        case "Manage":
            return <div className="phone-app">
                <Manage/>
                <MainMenu currentPage={props.state.currentPage} changeState={props.changeState}/>
            </div>;
        default:
            console.error("Cannot find page for:", props); // todo Clear all customer data
            return <Welcome/>
    }
};

export default Main
