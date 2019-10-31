import React from 'react';
import '../../assets/css/common.css'
import '../../assets/css/chain-wallet-extension.webflow.css'

import WebFont from 'webfontloader';

WebFont.load({google: {families: ["Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic", "Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic", "Quicksand:300,regular,500,700"]}});

const Account = (props) => {
    return (
        <div className="container">
            <div data-collapse="all" data-animation="default" data-duration="400"
                 className="nav04_mobile-2 w-nav">
                <div className="nav04_wrap-2">
                    <a href="#" className="nav04_logo w-nav-brand">
                        <h1 className="h3-quicksand-2">Menu 4</h1>
                    </a>
                    <a href="#" className="tag-p2-2 w-inline-block">
                        <div className="tag-cirle-p2"><img
                            src="https://uploads-ssl.webflow.com/5d68f74b5d863299418e9858/5d68f74b5d863284308e99bd_feather.svg"
                            height="15" alt=""/></div>
                        <div className="m11_tag_text_02">New Mindr</div>
                    </a>
                </div>
                <div className="w-nav-overlay" data-wf-ignore="">

                </div>
            </div>
            <div className="contact-container-2">
                <div data-duration-in="300" data-duration-out="100" className="tabs-3 w-tabs">
                    <div className="tabs-menu-5 w-tab-menu">
                        <a data-w-tab="Account"
                           className="tab-link-tab-2-2 w-inline-block w-tab-link w--current">
                            <div className="text-block-18">Account</div>
                        </a>
                        <a data-w-tab="Notification" className="tab-link-tab-2-2 w-inline-block w-tab-link">
                            <div className="text-block-18">APP &amp; Notification</div>
                        </a>
                    </div>
                    <div className="tabs-content-2 w-tab-content">
                        <div data-w-tab="Account" className="w-tab-pane w--tab-active">
                            <div className="container-1-2">
                                <div className="c07_column-copy">
                                    <h4 className="c07_h4">Hi Gareth Moïson</h4>
                                    <p className="c07_paragraph-copy m-b-40">Setting your account details. </p>
                                </div>
                                <div className="w-form">
                                    <form id="email-form" name="email-form" data-name="Email Form">
                                        <div>
                                            <div className="w-layout-grid grid-4-copy77">
                                                <div className="div-field">
                                                    <p className="field-label">First name</p><input type="email"
                                                                                                    className="text-field-2 w-input"
                                                                                                    maxLength="256"
                                                                                                    name="First-name"
                                                                                                    data-name="First Name"
                                                                                                    placeholder="Gareth"
                                                                                                    data-toggle="date"
                                                                                                    id="First-name"
                                                                                                    required=""/>
                                                </div>
                                                <div className="div-field">
                                                    <p className="field-label">Last Name</p><input type="email"
                                                                                                   className="text-field-2 w-input"
                                                                                                   maxLength="256"
                                                                                                   name="Last-name"
                                                                                                   data-name="Last Name"
                                                                                                   placeholder="Moison"
                                                                                                   data-toggle="date"
                                                                                                   id="Last-name"
                                                                                                   required=""/>
                                                </div>
                                                <div id="w-node-2f97152bc6cb-142726ab" className="div-field">
                                                    <p className="field-label">Email</p><input type="email"
                                                                                               className="text-field-2 w-input"
                                                                                               maxLength="256"
                                                                                               name="Email"
                                                                                               data-name="Email"
                                                                                               placeholder="exemple@email.com"
                                                                                               data-toggle="date"
                                                                                               id="Email"
                                                                                               required=""/>
                                                </div>
                                                <div id="w-node-2f97152bc6cf-142726ab" className="div-field">
                                                    <p className="field-label">Birthday</p><input type="email"
                                                                                                  className="text-field-2 w-input"
                                                                                                  maxLength="256"
                                                                                                  name="Birthday-2"
                                                                                                  data-name="Birthday 2"
                                                                                                  placeholder="00/00/0000"
                                                                                                  data-toggle="date"
                                                                                                  id="Birthday-2"
                                                                                                  required=""/>
                                                </div>
                                                <div className="div-field">
                                                    <p className="field-label">New Password</p><input
                                                    type="email" className="text-field-2 w-input"
                                                    maxLength="256" name="New-Password" data-name="New Password"
                                                    placeholder="**********" data-toggle="date"
                                                    id="New-Password"/>
                                                </div>
                                                <div className="div-field">
                                                    <p className="field-label">Repeat Password</p><input
                                                    type="email" className="text-field-2 w-input"
                                                    maxLength="256" name="New-Password-repeat"
                                                    data-name="New Password Repeat" placeholder="**********"
                                                    data-toggle="date" id="New-Password-repeat" required=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="button_main-3 m-b-20 w-button">Save changes</a>
                                        <div className="w-layout-grid grid-7">
                                            <a href="#" id="w-node-2f97152bc6de-142726ab"
                                               className="button_success w-button">Invite a friend</a>
                                            <a href="#" className="button_error_d w-button">Delete account</a>
                                            <a href="#" onClick={() => props.changeState("Login")}
                                               className="button_info_d w-button">Logout</a>
                                        </div>
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
                        <div data-w-tab="Notification" className="w-tab-pane">
                            <div className="container-1-2">
                                <div className="c07_column">
                                    <h4 className="c07_h4">Notification settings</h4>
                                    <p className="c07_paragraph-copy m-b-40">Be alerted when you have to be!</p>
                                    <div className="div-block-71">
                                        <div className="button-2 white-copy">
                                            <div>Basic Notifications</div>
                                            <div className="div-block-64">
                                                <a href="#" data-ix="toggle"
                                                   className="togglebutton w-inline-block">
                                                    <div data-ix="toggle" className="togglebuttonblue-2">

                                                    </div>
                                                    <div className="buttontoggle">

                                                    </div>
                                                </a>
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
    )
};

export default Account
