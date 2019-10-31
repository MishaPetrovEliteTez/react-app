import React from 'react';
import '../../assets/css/common.css'
import '../../assets/css/chain-wallet-extension.webflow.css'

import WebFont from 'webfontloader';

WebFont.load({google: {families: ["Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic", "Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic", "Quicksand:300,regular,500,700"]}});

const Wallet = (props) => {
    return (
        <div className="container">
            <div data-collapse="all" data-animation="default" data-duration="400"
                 className="nav04_mobile w-nav">
                <div className="nav04_wrap">
                    <a style={{textDecoration: 'none'}} href="#" className="nav04_logo w-nav-brand">
                        <h1 className="h3-quicksand">Tezos Wallet</h1>
                    </a>
                    <a href="#" className="tag-p2 w-inline-block">
                        <div className="m11_tag_text_02">Switch to Dune</div>
                    </a>
                </div>
            </div>
            <div className="contact-container">
                <div data-duration-in="300" data-duration-out="100" className="tabs-2 w-tabs">
                    <div className="tabs-menu-3 w-tab-menu">
                        <a data-w-tab="Receive" className="tab-link-tab-2 w-inline-block w-tab-link w--current">
                            <div className="text-block-18">My Wallet</div>
                        </a>
                        <a data-w-tab="Send" className="tab-link-tab-2 w-inline-block w-tab-link">
                            <div className="text-block-18">Send</div>
                        </a>
                        <a data-w-tab="Send to email" className="tab-link-tab-2 off w-inline-block w-tab-link">
                            <div className="text-block-18">Send TO EMAIL</div>
                        </a>
                    </div>
                    <div className="tabs-content-2 w-tab-content">
                        <div data-w-tab="Receive" className="w-tab-pane w--tab-active">
                            <div className="card-id-header">
                                <div className="div-block-72">
                                    <div className="card-id-header">
                                        <div><strong>Please be careful </strong></div>
                                        <p className="subptitle nm">This wallet is used for play in Jungle
                                            hackers. </p>
                                        <p className="subptitle nm">You can&#x27;t delegate with this
                                            one.</p>
                                    </div>
                                    <div className="form-block-3 w-form">
                                        <form id="email-form" name="email-form" data-name="Email Form"
                                              method="post" className="form">
                                            <a href="https://tzscan.io/tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk"
                                               target="_blank"
                                               className="lnd_button-2 nm color-tz w-inline-block">
                                                <div>tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk</div>
                                            </a>
                                            <div className="div-block-73"><a id="btn"
                                                                             data-clipboard-text="tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk"
                                                                             href="#"
                                                                             className="lnd_button_explore-copy w-button">COPIED</a><a
                                                href="#" id="btn-co"
                                                data-clipboard-text="tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk"
                                                className="btn w-button">copy</a><a
                                                href="https://tzscan.io/tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk"
                                                target="_blank" className="btn w-button">explore</a><a
                                                data-w-id="ec882b75-2328-afc8-61e2-96bf827bb1fd" href="#"
                                                target="_blank"
                                                style={{whiteSpace: 'nowrap'}}
                                                className="btn w-button">QR CODE</a></div>
                                        </form>
                                        <div className="w-form-done">
                                            <div>Thank you! Your submission has been received!</div>
                                        </div>
                                        <div className="w-form-fail">
                                            <div>Oops! Something went wrong while submitting the form.</div>
                                        </div>
                                    </div>
                                    <div style={{display: 'none'}} className="qr-code">
                                        <img src="images/frame.png" height="90" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
};


export default Wallet
