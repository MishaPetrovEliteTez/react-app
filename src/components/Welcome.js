import React, {Component} from 'react';
import '../assets/css/common.css'
import '../assets/css/chain-wallet-extension.webflow.css'
import ImageSvg from '../assets/images/undraw_referral_4ki4.svg';

import WebFont from 'webfontloader';

WebFont.load({google: {families: ["Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic", "Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic", "Quicksand:300,regular,500,700"]}});

class Welcome extends Component {

    render() {
        return (
        <div className="body section">
            <div className="phone-app">
                <div className="container-bot">
                    <div className="div-block-69">
                        <div data-collapse="all" data-animation="default" data-duration="400"
                             className="nav04_mobile-copy-2 w-nav">
                            <div className="nav04_wrap-2">
                                <a style={{textDecoration: 'none'}} href="#" className="nav04_logo w-nav-brand">
                                    <h1 className="h3-quicksand-2">Chain Wallet</h1>
                                </a>
                                <a href="#" className="tag-p2 w-inline-block">
                                    <div className="tag-cirle-p2">
                                        <img
                                            src="https://uploads-ssl.webflow.com/5d68f74b5d863299418e9858/5d68f74b5d86324c938e99ac_star.svg"
                                            height="15" alt=""/>
                                    </div>
                                    <div className="m11_tag_text_02">contact support</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="image-intro-big">
                        <img src={ImageSvg} alt=""/>
                        <div className="text-block-21">Keep in touch, <strong className="bold-black">always Without
                            minding</strong>
                        </div>
                    </div>
                    <div className="import-contact">
                        <div className="w-layout-grid grid-8">
                            <a href="my-relations.html" className="button_main-2 m-b-10 social-fb w-button">
                                <strong>Facebook</strong>
                            </a>
                            <a href="my-relations.html" className="button_main-2 m-b-10 social-google w-button">
                                <strong>Google</strong>
                            </a>
                        </div>
                        <a href="#" className="button_main-2 m-b-10 w-button">email address Connect</a>
                        <a href="register.html" className="button_info_d w-button">OR EMAIL REGISTER IN 1 MINUTE</a>
                    </div>
                </div>
            </div>
        </div>)
    }
}


export default Welcome
