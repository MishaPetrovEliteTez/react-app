import React from 'react';
import '../../assets/css/common.css'
import '../../assets/css/chain-wallet-extension.webflow.css'

import WebFont from 'webfontloader';

import walletImage from '../../assets/images/wallet.svg';
import layoutImage from '../../assets/images/layout.svg';
import timeImage from '../../assets/images/time_30_s.svg';
import petImage from '../../assets/images/pet.svg';

WebFont.load({google: {families: ["Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic", "Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic", "Quicksand:300,regular,500,700"]}});

const MainMenu = (props) => {
    let walletClasses = "icon_wrap w-inline-block";
    let delegateClasses = "icon_wrap w-inline-block";
    let manageClasses = "icon_wrap w-inline-block";
    let accountClasses = "icon_wrap w-inline-block";

    switch (props.currentPage.subPage) {
        case "Wallet":
            walletClasses = "icon_wrap w-inline-block w--current";
            break;
        case "Delegate":
            delegateClasses = "icon_wrap w-inline-block w--current";
            break;
        case "Manage":
            manageClasses = "icon_wrap w-inline-block w--current";
            break;
        case "Account":
            accountClasses = "icon_wrap w-inline-block w--current";
            break;
        default:
    }

    return (
        <div className="menu-main">
            <div className="w-layout-grid grid-6">
                <a href="#" onClick={() => props.changeState({page: "Main", subPage: "Wallet"})}
                   className={walletClasses} style={{width: '100%'}}>
                    <img src={walletImage} height="15" alt="" className="image-13"/>
                    <div className="text-block-22">Wallet</div>
                </a>
                <a href="#" onClick={() => props.changeState({page: "Main", subPage: "Delegate"})}
                   className={delegateClasses} style={{width: '100%'}}>
                    <img src={layoutImage} height="15" alt="" className="image-13"/>
                    <div className="text-block-22">Delegate</div>
                </a>
                <a href="#" onClick={() => props.changeState({page: "Main", subPage: "Manage"})}
                   className={manageClasses} style={{width: '100%'}}>
                    <img src={timeImage} height="15" alt="" className="image-13"/>
                    <div className="text-block-22">Manage</div>
                </a>
                <a href="#" onClick={() => props.changeState({page: "Main", subPage: "Account"})}
                   className={accountClasses} style={{width: '100%'}}>
                    <img src={petImage} height="15" alt="" className="image-13"/>
                    <div className="text-block-22">Account</div>
                </a>
            </div>
        </div>
    )
};

export default MainMenu
