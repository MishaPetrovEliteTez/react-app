import React from 'react';
import '../../assets/css/common.css'
import '../../assets/css/chain-wallet-extension.webflow.css'

import WebFont from 'webfontloader';

WebFont.load({google: {families: ["Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic", "Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic", "Quicksand:300,regular,500,700"]}});

const Manage = (props) => {
    return (<div className="phone-app">
        <div className="container">
            <div data-collapse="all" data-animation="default" data-duration="400" className="nav04_mobile w-nav">
                <div className="nav04_wrap">
                    <a href="#" className="nav04_logo w-nav-brand">
                        <h1 className="h3-quicksand">Tezos saver</h1>
                    </a>
                    <a href="#" className="tag-p2 w-inline-block">
                        <div className="m11_tag_text_02">Switch to Dune</div>
                    </a>
                </div>
                <div className="w-nav-overlay" data-wf-ignore=""></div>
            </div>
            <div className="contact-container">
                <div data-duration-in="300" data-duration-out="100" className="tabs-2 w-tabs">
                    <div className="tabs-menu-3 w-tab-menu">
                        <a data-w-tab="Backup" className="tab-link-tab-2 w-inline-block w-tab-link w--current">
                            <div className="text-block-18">BACKUP</div>
                        </a>
                        <a data-w-tab="Restore" className="tab-link-tab-2 w-inline-block w-tab-link">
                            <div className="text-block-18">RESTORE</div>
                        </a>
                        <a data-w-tab="Create" className="tab-link-tab-2 w-inline-block w-tab-link">
                            <div className="text-block-18">CREATE</div>
                        </a>
                    </div>
                    <div className="tabs-content-2 w-tab-content">
                        <div data-w-tab="Backup" className="w-tab-pane w--tab-active">
                            <div className="card-id-header">
                                <div className="div-block-72">
                                    <div className="form-block-3 w-form">
                                        <form id="email-form" name="email-form" data-name="Email Form" method="post"
                                              className="form">
                                            <div className="w-layout-grid grid-3--1-2">
                                                <div id="w-node-7613a1d821bc-ff2726aa"><textarea
                                                    placeholder="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"
                                                    maxLength="5000" id="field-2" name="field-2" data-name="Field 2"
                                                    className="textarea w-input"></textarea></div>
                                                <div id="w-node-7613a1d821be-ff2726aa" className="div-field-2">
                                                    <p className="field-label-2"><strong>Password</strong></p><input
                                                    type="password" className="text-field-3 w-input" maxLength="256"
                                                    name="password-12" data-name="Password 12"
                                                    placeholder="*************" data-toggle="date" id="password-12"
                                                    required=""/></div>
                                                <a id="w-node-7613a1d821c4-ff2726aa" href="#"
                                                   className="bt-main-2 w-button">Copy wallet code</a><a
                                                id="w-node-7613a1d821ba-ff2726aa" href="#"
                                                className="bt-main-2 w-button">Download Backup</a></div>
                                        </form>
                                        <div className="w-form-done">
                                            <div>Thank you! Your submission has been received!</div>
                                        </div>
                                        <div className="w-form-fail">
                                            <div>Oops! Something went wrong while submitting the form.</div>
                                        </div>
                                    </div>
                                    <div className="card-id-header">
                                        <div><strong>Wallet backup</strong></div>
                                        <p className="subptitle nm">Please save your backup file and keep it properly as
                                            well as password. It ensures access to your funds.<br/>‍<br/>Access to the
                                            wallet is possible only using both password and backup file.<br/><br/>Elite
                                            Tezos Ü does not keep nor able to restore your backup and password.
                                            Only you have access to your wallet.<br/><br/>Never share it with
                                            anyone.</p>
                                    </div>
                                    <div className="qr-code"><img src="images/frame.png" height="90" alt=""/></div>
                                </div>
                            </div>
                        </div>
                        <div data-w-tab="Restore" className="w-tab-pane">
                            <div className="card-id-header">
                                <div data-duration-in="300" data-duration-out="100" className="tabs-2 w-tabs">
                                    <div className="tabs-menu-3 w-tab-menu">
                                        <a data-w-tab="Transactions"
                                           className="tab-link-tab-2-2 w-inline-block w-tab-link">
                                            <div className="text-block-18">Import file</div>
                                        </a>
                                        <a data-w-tab="Transactions 2"
                                           className="tab-link-tab-2-2 w-inline-block w-tab-link">
                                            <div className="text-block-18">PRIVATE&nbsp;KEY</div>
                                        </a>
                                        <a data-w-tab="Transactions 3"
                                           className="tab-link-tab-2-2 w-inline-block w-tab-link w--current">
                                            <div className="text-block-18">Manually enter</div>
                                        </a>
                                    </div>
                                    <div className="tabs-content-2 w-tab-content">
                                        <div data-w-tab="Transactions" className="w-tab-pane">
                                            <div className="card-id-header">
                                                <div className="div-block-72">
                                                    <div className="card-id-header">
                                                        <div className="text-block-23"><strong>Upload my wallet
                                                            file</strong></div>
                                                        <a href="https://tzscan.io/tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk"
                                                           target="_blank"
                                                           className="lnd_button-2 nm color-tz-copy w-inline-block">
                                                            <div>Upload my wallet file</div>
                                                        </a>
                                                        <div className="form-block-2 w-form">
                                                            <form id="email-form-2" name="email-form-2"
                                                                  data-name="Email Form 2">
                                                                <div className="w-layout-grid grid-3--1-3">
                                                                    <div id="w-node-8455a35fac5a-ff2726aa"
                                                                         className="div-field-2">
                                                                        <p className="field-label-2">
                                                                            <strong>Password</strong></p><input
                                                                        type="password" className="text-field-3 w-input"
                                                                        maxLength="256" name="password-10"
                                                                        data-name="Password 10"
                                                                        placeholder="*************" data-toggle="date"
                                                                        id="password-10" required=""/></div>
                                                                    <a id="w-node-8455a35fac58-ff2726aa" href="#"
                                                                       className="bt-main-2 w-button">Restore wallet</a>
                                                                </div>
                                                            </form>
                                                            <div className="w-form-done">
                                                                <div>Thank you! Your submission has been received!</div>
                                                            </div>
                                                            <div className="w-form-fail">
                                                                <div>Oops! Something went wrong while submitting the
                                                                    form.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-w-tab="Transactions 2" className="w-tab-pane">
                                            <div className="card-id-header">
                                                <div className="div-block-72">
                                                    <div className="card-id-header">
                                                        <div className="text-block-23 m-b-20"><strong>Paste your private
                                                            key</strong></div>
                                                        <div className="form-block-2 w-form">
                                                            <form id="email-form-2" name="email-form-2"
                                                                  data-name="Email Form 2">
                                                                <div className="w-layout-grid grid-3--1-3"><a
                                                                    id="w-node-2995eed59324-ff2726aa" href="#"
                                                                    className="bt-main-2 w-button">Restore wallet</a>
                                                                    <div id="w-node-94d035ce868c-ff2726aa"
                                                                         className="div-field-2">
                                                                        <p className="field-label-2"><strong>Private
                                                                            Key</strong></p><input type="password"
                                                                                                   className="text-field-3 w-input"
                                                                                                   maxLength="256"
                                                                                                   name="tz1key-2"
                                                                                                   data-name="Tz 1 Key 2"
                                                                                                   placeholder="ts1000000000000000000001"
                                                                                                   data-toggle="date"
                                                                                                   id="tz1key-2"
                                                                                                   required=""/></div>
                                                                </div>
                                                            </form>
                                                            <div className="w-form-done">
                                                                <div>Thank you! Your submission has been received!</div>
                                                            </div>
                                                            <div className="w-form-fail">
                                                                <div>Oops! Something went wrong while submitting the
                                                                    form.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-w-tab="Transactions 3" className="w-tab-pane w--tab-active">
                                            <div className="card-id-header">
                                                <div className="div-block-72">
                                                    <div className="card-id-header">
                                                        <div><strong>Please be careful </strong></div>
                                                        <p className="subptitle nm">Verify your address before to click
                                                            on the send button.</p>
                                                    </div>
                                                    <div className="form-block-2 w-form">
                                                        <form id="email-form-2" name="email-form-2"
                                                              data-name="Email Form 2">
                                                            <section className="section-custom-top"></section>
                                                        </form>
                                                        <div className="w-form-done">
                                                            <div>Thank you! Your submission has been received!</div>
                                                        </div>
                                                        <div className="w-form-fail">
                                                            <div>Oops! Something went wrong while submitting the form.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-block-2 w-form">
                                                        <form id="email-form-2" name="email-form-2"
                                                              data-name="Email Form 2">
                                                            <section className="section-custom-top"></section>
                                                        </form>
                                                        <div className="w-form-done">
                                                            <div>Thank you! Your submission has been received!</div>
                                                        </div>
                                                        <div className="w-form-fail">
                                                            <div>Oops! Something went wrong while submitting the form.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-block-3 w-form">
                                                        <form id="email-form" name="email-form" data-name="Email Form"
                                                              method="post" className="form">
                                                            <div className="w-layout-grid grid-3--1-2">
                                                                <div id="w-node-861f2b1558b1-ff2726aa"><textarea
                                                                    placeholder="Paste your private key here"
                                                                    maxLength="5000" id="field-2" name="field-2"
                                                                    data-name="Field 2"
                                                                    className="textarea w-input"></textarea></div>
                                                                <div id="w-node-861f2b1558b3-ff2726aa"
                                                                     className="div-field-2">
                                                                    <p className="field-label-2">
                                                                        <strong>Password</strong></p><input
                                                                    type="password" className="text-field-3 w-input"
                                                                    maxLength="256" name="password-12"
                                                                    data-name="Password 12" placeholder="*************"
                                                                    data-toggle="date" id="password-12" required=""/>
                                                                </div>
                                                                <a id="w-node-861f2b1558b8-ff2726aa" href="#"
                                                                   className="bt-main-2 w-button">Restore the wallet</a>
                                                            </div>
                                                        </form>
                                                        <div className="w-form-done">
                                                            <div>Thank you! Your submission has been received!</div>
                                                        </div>
                                                        <div className="w-form-fail">
                                                            <div>Oops! Something went wrong while submitting the form.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-w-tab="Create" className="w-tab-pane">
                            <div className="card-id-header">
                                <div className="div-block-72">
                                    <div className="card-id-header">
                                        <div><strong>Please be careful </strong></div>
                                        <p className="subptitle nm bm-20">Verify your address before to click on the
                                            send button.</p>
                                        <p className="subptitle nm">Pass phrase here </p>
                                    </div>
                                    <div className="form-block-2 w-form">
                                        <form id="email-form-2" name="email-form-2" data-name="Email Form 2">
                                            <section className="section-custom-top"></section>
                                        </form>
                                        <div className="w-form-done">
                                            <div>Thank you! Your submission has been received!</div>
                                        </div>
                                        <div className="w-form-fail">
                                            <div>Oops! Something went wrong while submitting the form.</div>
                                        </div>
                                    </div>
                                    <div className="form-block-2 w-form">
                                        <form id="email-form-2" name="email-form-2" data-name="Email Form 2">
                                            <section className="section-custom-top"></section>
                                        </form>
                                        <div className="w-form-done">
                                            <div>Thank you! Your submission has been received!</div>
                                        </div>
                                        <div className="w-form-fail">
                                            <div>Oops! Something went wrong while submitting the form.</div>
                                        </div>
                                    </div>
                                    <div className="form-block-3 w-form">
                                        <form id="email-form" name="email-form" data-name="Email Form" method="post"
                                              className="form">
                                            <div className="w-layout-grid grid-3--1-2">
                                                <div id="w-node-cc6c5995535e-ff2726aa" className="div-field-2">
                                                    <p className="field-label-2"><strong>Password</strong></p><input
                                                    type="password" className="text-field-3 w-input" maxLength="256"
                                                    name="password-12" data-name="Password 12"
                                                    placeholder="*************" data-toggle="date" id="password-12"
                                                    required=""/></div>
                                                <a id="w-node-cc6c59955363-ff2726aa" href="#"
                                                   className="bt-main-2 w-button">Create my wallet</a></div>
                                        </form>
                                        <div className="w-form-done">
                                            <div>Thank you! Your submission has been received!</div>
                                        </div>
                                        <div className="w-form-fail">
                                            <div>Oops! Something went wrong while submitting the form.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
};


export default Manage
