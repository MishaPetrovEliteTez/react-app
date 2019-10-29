import React from 'react';
import '../../assets/css/common.css'
import '../../assets/css/chain-wallet-extension.webflow.css'

import WebFont from 'webfontloader';

WebFont.load({google: {families: ["Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic", "Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic", "Quicksand:300,regular,500,700"]}});

const MainMenu = (props) => {
    return (
        <div className="menu-main">
            <div className="w-layout-grid grid-6">
                <a href="#" onClick={() => props.changeState({page: "Main", subPage: "Wallet"})}
                   className="icon_wrap w-inline-block w--current">
                    {/*<img src="images/wallet.svg" height="15" alt="" className="image-13"/>*/}
                    <div className="text-block-22">Wallet</div>
                </a>
                <a href="#" onClick={() => props.changeState({page: "Main", subPage: "Delegate"})}
                   className="icon_wrap w-inline-block">
                    {/*<img src="images/layout.svg" height="15" alt="" className="image-13"/>*/}
                    <div className="text-block-22">Delegate</div>
                </a>
                <a href="#" onClick={() => props.changeState({page: "Main", subPage: "Manage"})}
                   className="icon_wrap w-inline-block">
                    {/*<img src="images/time_30_s.svg" height="15" alt="" className="image-13"/>*/}
                    <div className="text-block-22">Manage</div>
                </a><a href="#" onClick={() => props.changeState({page: "Main", subPage: "Account"})}
                       className="icon_wrap off w-inline-block">
                <img src="images/pet.svg" height="15" alt="" className="image-13"/>
                <div className="text-block-22">Account</div>
            </a></div>
        </div>
    )
};

export default MainMenu
