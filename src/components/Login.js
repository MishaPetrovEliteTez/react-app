import React from 'react';
import '../assets/css/common.css'
import '../assets/css/chain-wallet-extension.webflow.css'
import ImageSvg from '../assets/images/undraw_mention_6k5d.svg';

import WebFont from 'webfontloader';

WebFont.load({google: {families: ["Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic", "Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic", "Quicksand:300,regular,500,700"]}});

const Login = (props) => {
    return (
        <div className="body">
            <div className="phone-app">
                <div className="container-bot">
                    <div className="div-block-69">
                        <div data-collapse="all" data-animation="default" data-duration="400"
                             className="nav04_mobile-copy w-nav">
                            <div className="nav04_wrap">
                                <a href="index.html" className="icon_wrap-2-copy w-inline-block">
                                    <img
                                        src="https://uploads-ssl.webflow.com/5d68f74b5d863299418e9858/5d68f74b5d8632c9aa8e9951_arrow-left.svg"
                                        width="24" alt="" className="image-11"/>
                                    <h1 className="h3-quicksand">Login</h1>
                                </a>
                                <div>
                                    <p className="c07_paragraph-copy">© Gareth Moison</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image-intro _70">
                        <img src={ImageSvg} alt=""/>
                    </div>
                    <div className="container-1-copy">
                        <div className="form-block w-form">
                            <form id="email-form" name="email-form" data-name="Email Form">
                                <div>
                                    <div className="w-layout-grid grid-4-copy77">
                                        <div id="w-node-99aae7c9bc97-992726a7" className="div-field">
                                            <p className="field-label">Email</p><input type="email"
                                                                                       className="text-field w-input"
                                                                                       maxLength="256" name="Email"
                                                                                       data-name="Email"
                                                                                       placeholder="Your email"
                                                                                       data-toggle="date" id="Email"
                                                                                       required=""/>
                                        </div>
                                        <div id="w-node-99aae7c9bc9f-992726a7" className="div-field">
                                            <p className="field-label">Password</p><input type="email"
                                                                                          className="text-field w-input"
                                                                                          maxLength="256"
                                                                                          name="New-Password"
                                                                                          data-name="New Password"
                                                                                          placeholder="**********"
                                                                                          data-toggle="date"
                                                                                          id="New-Password"/></div>
                                    </div>
                                </div>
                                <a href="#" onClick={() => props.changeState("Wallet")} className="button_main w-button">Login</a>
                                <div className="div-block-57">
                                    <a href="forgot-password.html" className="link-block-12 w-inline-block">
                                        <div className="text-block-15 white">Forgot Password</div>
                                    </a>
                                    <a href="register.html" className="link-block-12 w-inline-block">
                                        <div className="text-block-15 white">Or register</div>
                                    </a>
                                </div>
                            </form>
                            {/*<div className="w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                        </div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login
