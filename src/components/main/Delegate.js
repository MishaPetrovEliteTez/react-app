import React from 'react';
import '../../assets/css/common.css'
import '../../assets/css/chain-wallet-extension.webflow.css'

import WebFont from 'webfontloader';
import ImageReplay from "../../assets/images/replay.svg";
import ImageFrame from "../../assets/images/frame.png";

WebFont.load({google: {families: ["Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic", "Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic", "Quicksand:300,regular,500,700"]}});

const Delegate = (props) => {
    return (
        <div className="container">
            <div data-collapse="all" data-animation="default" data-duration="400" className="nav04_mobile w-nav">
                <div className="nav04_wrap">
                    <a href="#" className="nav04_logo w-nav-brand">
                        <h1 className="h3-quicksand">Tezos Delegation</h1>
                    </a>
                    <a href="#" className="tag-p2 w-inline-block">
                        <div className="m11_tag_text_02">Switch to Dune</div>
                    </a>
                </div>
                <div className="w-nav-overlay" data-wf-ignore="">

                </div>
            </div>
            <div className="contact-container">
                <div data-duration-in="300" data-duration-out="100" className="tabs-2 w-tabs">
                    <div className="tabs-menu-3 w-tab-menu">
                        <a data-w-tab="Receive" className="tab-link-tab-2 w-inline-block w-tab-link w--current">
                            <div className="text-block-18">Delegator 1</div>
                        </a>
                        <a data-w-tab="Receive 2" className="tab-link-tab-2 w-inline-block w-tab-link">
                            <div className="text-block-18">Delegator 2</div>
                        </a>
                        <a data-w-tab="Send to email 3" className="tab-link-tab-2 w-inline-block w-tab-link">
                            <div className="text-block-18">Add delegator</div>
                        </a>
                    </div>
                    <div className="tabs-content-2 w-tab-content">
                        <div data-w-tab="Receive" className="w-tab-pane w--tab-active"
                             style={{opacity: 1, transition: 'opacity 300ms ease 0s'}}>
                            <div className="card-id-header">
                                <div className="big-card-color white-txt bg-delegation">
                                    <div className="div-block-93">
                                        <div className="div-block-64">
                                            <div className="text-block m-b-0">2230 <strong>ꜩ </strong>Delegated
                                            </div>
                                        </div>
                                        <div className="horizontal-small">
                                            <a href="#" className="icon w-inline-block">
                                                <img src={ImageReplay} height="15" alt="" className="image-12 m-r-0"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="div-block-47">
                                        <div className="div-block-64"><img
                                            src="https://uploads-ssl.webflow.com/5d6d606b72061d21697fcc63/5d6d797f6ca181595a063651_wallet.svg"
                                            width="21" alt="" className="c03_check_icon"/>
                                            <div className="color-ref ref-left">87,87&nbsp;ꜩ REWARDED</div>
                                        </div>
                                        <div className="div-block-3">

                                        </div>
                                    </div>
                                </div>
                                <div className="div-block-72 line-bar">
                                    <div className="form-block-3 w-form">
                                        <form id="email-form" name="email-form" data-name="Email Form" method="post"
                                              className="form">
                                            <a href="https://tzscan.io/tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk"
                                               target="_blank" className="lnd_button-2 nm color-tz w-inline-block">
                                                <div>KT1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk</div>
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
                                                data-w-id="cdd50e2f-6686-ab16-65dd-98d22fce119b" href="#"
                                                target="_blank" className="btn w-button">QR&nbsp;CODE</a></div>
                                        </form>
                                        <div className="w-form-done">
                                            <div>Thank you! Your submission has been received!</div>
                                        </div>
                                        <div className="w-form-fail">
                                            <div>Oops! Something went wrong while submitting the form.</div>
                                        </div>
                                    </div>
                                    <div className="qr-code">
                                        <img src={ImageFrame} height="90" alt=""/>
                                    </div>
                                </div>
                                <div data-duration-in="300" data-duration-out="100" className="tabs-2 w-tabs">
                                    <div className="tabs-menu-3 w-tab-menu">
                                        <a data-w-tab="Transactions"
                                           className="tab-link-tab-2 w-inline-block w-tab-link w--current">
                                            <div className="text-block-18">Transactions</div>
                                        </a>
                                        <a data-w-tab="Delegate"
                                           className="tab-link-tab-2 w-inline-block w-tab-link">
                                            <div className="text-block-18">delegate</div>
                                        </a>
                                        <a data-w-tab="Send" className="tab-link-tab-2 w-inline-block w-tab-link">
                                            <div className="text-block-18">Send</div>
                                        </a>
                                        <a data-w-tab="Info" className="tab-link-tab-2 w-inline-block w-tab-link">
                                            <div className="text-block-18">Info</div>
                                        </a>
                                    </div>
                                    <div className="tabs-content-2 w-tab-content">
                                        <div data-w-tab="Transactions" className="w-tab-pane w--tab-active">
                                            <div className="card-id-header">
                                                <div className="w-layout-grid grid-9">
                                                    <div>
                                                        <div><strong>May 2, 2019</strong></div>
                                                        <div>12 : 01 : 45</div>
                                                    </div>
                                                    <div id="w-node-f3e3c76ffc84-0e2726a9">
                                                        <div className="div-block-95-copy">
                                                            <div>Reward</div>
                                                        </div>
                                                        <div className="tezos-receive">+&nbsp;3,8&nbsp;XTZ</div>
                                                    </div>
                                                </div>
                                                <div className="w-layout-grid grid-9">
                                                    <div>
                                                        <div><strong>May 2, 2019</strong></div>
                                                        <div>12 : 01 : 45</div>
                                                    </div>
                                                    <div id="w-node-d2d83da5a5c3-0e2726a9">
                                                        <div className="div-block-95-copy">
                                                            <div>Reward</div>
                                                        </div>
                                                        <div className="tezos-receive">+&nbsp;3,8&nbsp;XTZ</div>
                                                    </div>
                                                </div>
                                                <div className="w-layout-grid grid-9">
                                                    <div>
                                                        <div><strong>May 2, 2019</strong></div>
                                                        <div>12 : 01 : 45</div>
                                                    </div>
                                                    <div id="w-node-175d080da5aa-0e2726a9">
                                                        <div className="div-block-95-copy">
                                                            <div>Reward</div>
                                                        </div>
                                                        <div className="tezos-receive">+&nbsp;3,8&nbsp;XTZ</div>
                                                    </div>
                                                </div>
                                                <div className="w-layout-grid grid-9">
                                                    <div>
                                                        <div><strong>May 2, 2019</strong></div>
                                                        <div>12 : 01 : 45</div>
                                                    </div>
                                                    <div id="w-node-9f3fe68ee6d5-0e2726a9">
                                                        <div className="div-block-95-copy">
                                                            <div>Reward</div>
                                                        </div>
                                                        <div className="tezos-receive">+&nbsp;3,8&nbsp;XTZ</div>
                                                    </div>
                                                </div>
                                                <div className="w-layout-grid grid-9">
                                                    <div>
                                                        <div><strong>May 2, 2019</strong></div>
                                                        <div>12 : 01 : 45</div>
                                                    </div>
                                                    <div id="w-node-7b68b32ebb7c-0e2726a9">
                                                        <div className="div-block-95-copy">
                                                            <div>Reward</div>
                                                        </div>
                                                        <div className="tezos-receive">+&nbsp;3,8&nbsp;XTZ</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-w-tab="Delegate" className="w-tab-pane">
                                            <div className="card-id-header">
                                                <div className="div-block-72">
                                                    <div className="card-id-header">
                                                        <div><strong>Change your delegator </strong></div>
                                                        <p className="subptitle nm">If you change this one, all xtz
                                                            will move to the new one. Then you have to wait for 21
                                                            cycle before rewards.</p>
                                                    </div>
                                                    <div className="form-block-2 w-form">
                                                        <form id="email-form-2" name="email-form-2"
                                                              data-name="Email Form 2">
                                                            <section className="section-custom-top">
                                                                <div className="w-layout-grid grid-2 nm">
                                                                    <div id="w-node-c3312f209387-0e2726a9"
                                                                         className="div-field-2">
                                                                        <p className="field-label-2">Baker address
                                                                            for delegate</p><select id="bakers"
                                                                                                    name="Gender-2"
                                                                                                    data-name="Gender 2"
                                                                                                    className="select-field-2 w-select">
                                                                        <option
                                                                            value="tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk">tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk
                                                                            (FULL)
                                                                        </option>
                                                                        <option
                                                                            value="tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk">tz2W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk
                                                                            (34%)
                                                                        </option>
                                                                        <option
                                                                            value="tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk">tz3W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk
                                                                            (78%)
                                                                        </option>
                                                                        <option
                                                                            value="tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk">tz4W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk
                                                                            (98%)
                                                                        </option>
                                                                        <option
                                                                            value="tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk">tz5W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk
                                                                            (34%)
                                                                        </option>
                                                                        <option
                                                                            value="tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk">tz6W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk
                                                                            (45%)
                                                                        </option>
                                                                    </select></div>
                                                                    <a id="w-node-c3312f20938f-0e2726a9" href="#"
                                                                       className="bt-main w-button">Change
                                                                        delegation address</a></div>
                                                            </section>
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
                                        <div data-w-tab="Send" className="w-tab-pane">
                                            <div className="card-id-header">
                                                <div className="div-block-72">
                                                    <div className="card-id-header">
                                                        <div><strong>Please be careful </strong></div>
                                                        <p className="subptitle nm">If you send on tz 1 your are not
                                                            going to delegate. </p>
                                                    </div>
                                                    <div className="form-block-2 w-form">
                                                        <form id="email-form-2" name="email-form-2"
                                                              data-name="Email Form 2">
                                                            <section className="section-custom-top">
                                                                <div className="w-layout-grid grid-2 nm">
                                                                    <div id="w-node-584e4887cb89-0e2726a9"
                                                                         className="div-field-2">
                                                                        <p className="field-label-2"><strong>Destination
                                                                            Address</strong></p><input type="text"
                                                                                                       className="text-field-3 w-input"
                                                                                                       maxLength="256"
                                                                                                       name="Destination-Address-2"
                                                                                                       data-name="Destination Address 2"
                                                                                                       placeholder="KT1 / tz1 . . . . "
                                                                                                       data-toggle="date"
                                                                                                       id="Destination-Address-2"
                                                                                                       required=""/>
                                                                    </div>
                                                                    <div id="w-node-584e4887cb8e-0e2726a9"
                                                                         className="div-field-2">
                                                                        <p className="field-label-2"><strong>Amount
                                                                            ꜩ</strong></p><input type="text"
                                                                                                 className="text-field-3 w-input"
                                                                                                 maxLength="256"
                                                                                                 name="Amount-2"
                                                                                                 data-name="Amount 2"
                                                                                                 placeholder="0.000 ꜩ"
                                                                                                 data-toggle="date"
                                                                                                 id="Amount-2"
                                                                                                 required=""/></div>
                                                                    <a id="w-node-584e4887cb93-0e2726a9" href="#"
                                                                       className="bt-main-2 w-button">Save card</a>
                                                                    <div id="w-node-584e4887cb95-0e2726a9"
                                                                         className="div-field-2">
                                                                        <p className="field-label-2">Fees <strong>ꜩ</strong>
                                                                        </p><select id="bakers" name="Gender-2"
                                                                                    data-name="Gender 2"
                                                                                    className="select-field-2 w-select">
                                                                        <option value="Low - 1420 μꜩ">Low - 1420
                                                                            μꜩ
                                                                        </option>
                                                                        <option value="Medium - 5000 μꜩ">Medium -
                                                                            5000 μꜩ
                                                                        </option>
                                                                        <option value="Hight - 30000 μꜩ">Hight -
                                                                            30000 μꜩ
                                                                        </option>
                                                                    </select></div>
                                                                    <a id="w-node-584e4887cb9b-0e2726a9" href="#"
                                                                       className="bt-secondary w-button">Clear</a>
                                                                </div>
                                                            </section>
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
                                        <div data-w-tab="Info" className="w-tab-pane">
                                            <div className="card-id-header">
                                                <div className="div-block-72">
                                                    <div className="card-id-header">
                                                        <div><strong>Why Delegate ?</strong></div>
                                                        <p className="subptitle nm">Please ensure the delegate you
                                                            are entering has been registered to participate in the
                                                            baking protocol and not full.<br/>We are an
                                                            internation<strong> Tezos <br/>Delagation service
                                                                from cycle 17.<br/>‍<br/></strong>Delegate with us
                                                            and support the ongoing development of the Tezos
                                                            blockchain and Elite Tezos. &nbsp;Delegation is easy
                                                            just takes two minutes of your time. <strong>Get
                                                                8%&nbsp;XTZ&nbsp;return per year on your Tezos
                                                                delegated.<br/><br/></strong>Your can check our <a
                                                                href="https://www.elitetezos.com/"
                                                                target="_blank">baker website</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-w-tab="Receive 2" className="w-tab-pane">
                            <div className="card-id-header">
                                <div className="big-card-color white-txt bg-delegation">
                                    <div className="div-block-93">
                                        <div className="div-block-64">
                                            <div className="text-block m-b-0">9230 <strong>ꜩ </strong>Delegated
                                            </div>
                                        </div>
                                        <div className="horizontal-small">
                                            <a href="#" className="icon w-inline-block">
                                                <img src={ImageReplay} height="15" alt="" className="image-12 m-r-0"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="div-block-47">
                                        <div className="div-block-64"><img
                                            src="https://uploads-ssl.webflow.com/5d6d606b72061d21697fcc63/5d6d797f6ca181595a063651_wallet.svg"
                                            width="21" alt="" className="c03_check_icon"/>
                                            <div className="color-ref ref-left">87,87&nbsp;ꜩ REWARDED</div>
                                        </div>
                                        <div className="div-block-3">

                                        </div>
                                    </div>
                                </div>
                                <div className="div-block-72 line-bar">
                                    <div className="form-block-3 w-form">
                                        <form id="email-form" name="email-form" data-name="Email Form" method="post"
                                              className="form">
                                            <a href="https://tzscan.io/tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk"
                                               target="_blank" className="lnd_button-2 nm color-tz w-inline-block">
                                                <div>KT1W1f1Jpj1iiDobqP5TrE7VsqP5E7VsqP5Dk</div>
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
                                                data-w-id="8ca54241-dde1-febe-ab35-1e89a489ba04" href="#"
                                                target="_blank" className="btn w-button">QR&nbsp;CODE</a></div>
                                        </form>
                                        <div className="w-form-done">
                                            <div>Thank you! Your submission has been received!</div>
                                        </div>
                                        <div className="w-form-fail">
                                            <div>Oops! Something went wrong while submitting the form.</div>
                                        </div>
                                    </div>
                                    <div className="qr-code">
                                        <img src={ImageFrame} height="90" alt=""/>
                                    </div>
                                </div>
                                <div data-duration-in="300" data-duration-out="100" className="tabs-2 w-tabs">
                                    <div className="tabs-menu-3 w-tab-menu">
                                        <a data-w-tab="Transactions"
                                           className="tab-link-tab-2 w-inline-block w-tab-link">
                                            <div className="text-block-18">Transactions</div>
                                        </a>
                                        <a data-w-tab="Delegate"
                                           className="tab-link-tab-2 w-inline-block w-tab-link w--current">
                                            <div className="text-block-18">delegate</div>
                                        </a>
                                        <a data-w-tab="Send" className="tab-link-tab-2 w-inline-block w-tab-link">
                                            <div className="text-block-18">Send</div>
                                        </a>
                                        <a data-w-tab="Info" className="tab-link-tab-2 w-inline-block w-tab-link">
                                            <div className="text-block-18">Info</div>
                                        </a>
                                    </div>
                                    <div className="tabs-content-2 w-tab-content">
                                        <div data-w-tab="Transactions" className="w-tab-pane">
                                            <div className="card-id-header">
                                                <div className="w-layout-grid grid-9">
                                                    <div>
                                                        <div><strong>May 2, 2019</strong></div>
                                                        <div>12 : 01 : 45</div>
                                                    </div>
                                                    <div id="w-node-1e89a489ba26-0e2726a9">
                                                        <div className="div-block-95-copy">
                                                            <div>Reward</div>
                                                        </div>
                                                        <div className="tezos-receive">+&nbsp;3,8&nbsp;XTZ</div>
                                                    </div>
                                                </div>
                                                <div className="w-layout-grid grid-9">
                                                    <div>
                                                        <div><strong>May 2, 2019</strong></div>
                                                        <div>12 : 01 : 45</div>
                                                    </div>
                                                    <div id="w-node-1e89a489ba33-0e2726a9">
                                                        <div className="div-block-95-copy">
                                                            <div>Reward</div>
                                                        </div>
                                                        <div className="tezos-receive">+&nbsp;3,8&nbsp;XTZ</div>
                                                    </div>
                                                </div>
                                                <div className="w-layout-grid grid-9">
                                                    <div>
                                                        <div><strong>May 2, 2019</strong></div>
                                                        <div>12 : 01 : 45</div>
                                                    </div>
                                                    <div id="w-node-1e89a489ba40-0e2726a9">
                                                        <div className="div-block-95-copy">
                                                            <div>Reward</div>
                                                        </div>
                                                        <div className="tezos-receive">+&nbsp;3,8&nbsp;XTZ</div>
                                                    </div>
                                                </div>
                                                <div className="w-layout-grid grid-9">
                                                    <div>
                                                        <div><strong>May 2, 2019</strong></div>
                                                        <div>12 : 01 : 45</div>
                                                    </div>
                                                    <div id="w-node-1e89a489ba4d-0e2726a9">
                                                        <div className="div-block-95-copy">
                                                            <div>Reward</div>
                                                        </div>
                                                        <div className="tezos-receive">+&nbsp;3,8&nbsp;XTZ</div>
                                                    </div>
                                                </div>
                                                <div className="w-layout-grid grid-9">
                                                    <div>
                                                        <div><strong>May 2, 2019</strong></div>
                                                        <div>12 : 01 : 45</div>
                                                    </div>
                                                    <div id="w-node-1e89a489ba5a-0e2726a9">
                                                        <div className="div-block-95-copy">
                                                            <div>Reward</div>
                                                        </div>
                                                        <div className="tezos-receive">+&nbsp;3,8&nbsp;XTZ</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-w-tab="Delegate" className="w-tab-pane w--tab-active">
                                            <div className="card-id-header">
                                                <div className="div-block-72">
                                                    <div className="card-id-header">
                                                        <div className="text-block-23"><strong>Your are delegated
                                                            to </strong></div>
                                                        <a href="https://mytezosbaker.com/elitetezos"
                                                           target="_blank"
                                                           className="temp04_button max-copy w-button"><strong>tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk</strong><br/></a>
                                                        <div><strong>Change your delegator </strong></div>
                                                        <p className="subptitle nm">If you change this one, all xtz
                                                            will move to the new one. Then you have to wait for 21
                                                            cycle before rewards.</p>
                                                    </div>
                                                    <div className="form-block-2 w-form">
                                                        <form id="email-form-2" name="email-form-2"
                                                              data-name="Email Form 2">
                                                            <section className="section-custom-top">
                                                                <div className="w-layout-grid grid-2 nm">
                                                                    <div id="w-node-1e89a489ba6d-0e2726a9"
                                                                         className="div-field-2">
                                                                        <p className="field-label-2">Baker address
                                                                            for delegate</p><select id="bakers"
                                                                                                    name="Gender-2"
                                                                                                    data-name="Gender 2"
                                                                                                    className="select-field-2 w-select">
                                                                        <option
                                                                            value="tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk">tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk
                                                                            (FULL)
                                                                        </option>
                                                                        <option
                                                                            value="tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk">tz2W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk
                                                                            (34%)
                                                                        </option>
                                                                        <option
                                                                            value="tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk">tz3W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk
                                                                            (78%)
                                                                        </option>
                                                                        <option
                                                                            value="tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk">tz4W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk
                                                                            (98%)
                                                                        </option>
                                                                        <option
                                                                            value="tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk">tz5W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk
                                                                            (34%)
                                                                        </option>
                                                                        <option
                                                                            value="tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk">tz6W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk
                                                                            (45%)
                                                                        </option>
                                                                    </select></div>
                                                                    <a id="w-node-1e89a489ba71-0e2726a9" href="#"
                                                                       className="bt-main w-button">Change
                                                                        delegation address</a></div>
                                                            </section>
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
                                        <div data-w-tab="Send" className="w-tab-pane">
                                            <div className="card-id-header">
                                                <div className="div-block-72">
                                                    <div className="card-id-header">
                                                        <div><strong>Please be careful </strong></div>
                                                        <p className="subptitle nm">If you send on tz 1 your are not
                                                            going to delegate. </p>
                                                    </div>
                                                    <div className="form-block-2 w-form">
                                                        <form id="email-form-2" name="email-form-2"
                                                              data-name="Email Form 2">
                                                            <section className="section-custom-top">
                                                                <div className="w-layout-grid grid-2 nm">
                                                                    <div id="w-node-1e89a489ba86-0e2726a9"
                                                                         className="div-field-2">
                                                                        <p className="field-label-2"><strong>Destination
                                                                            Address</strong></p><input type="text"
                                                                                                       className="text-field-3 w-input"
                                                                                                       maxLength="256"
                                                                                                       name="Destination-Address-2"
                                                                                                       data-name="Destination Address 2"
                                                                                                       placeholder="KT1 / tz1 . . . . "
                                                                                                       data-toggle="date"
                                                                                                       id="Destination-Address-2"
                                                                                                       required=""/>
                                                                    </div>
                                                                    <div id="w-node-1e89a489ba8b-0e2726a9"
                                                                         className="div-field-2">
                                                                        <p className="field-label-2"><strong>Amount
                                                                            ꜩ</strong></p><input type="text"
                                                                                                 className="text-field-3 w-input"
                                                                                                 maxLength="256"
                                                                                                 name="Amount-2"
                                                                                                 data-name="Amount 2"
                                                                                                 placeholder="0.000 ꜩ"
                                                                                                 data-toggle="date"
                                                                                                 id="Amount-2"
                                                                                                 required=""/></div>
                                                                    <a id="w-node-1e89a489ba90-0e2726a9" href="#"
                                                                       className="bt-main-2 w-button">Save card</a>
                                                                    <div id="w-node-1e89a489ba92-0e2726a9"
                                                                         className="div-field-2">
                                                                        <p className="field-label-2">Fees <strong>ꜩ</strong>
                                                                        </p><select id="bakers" name="Gender-2"
                                                                                    data-name="Gender 2"
                                                                                    className="select-field-2 w-select">
                                                                        <option value="Low - 1420 μꜩ">Low - 1420
                                                                            μꜩ
                                                                        </option>
                                                                        <option value="Medium - 5000 μꜩ">Medium -
                                                                            5000 μꜩ
                                                                        </option>
                                                                        <option value="Hight - 30000 μꜩ">Hight -
                                                                            30000 μꜩ
                                                                        </option>
                                                                    </select></div>
                                                                    <a id="w-node-1e89a489ba98-0e2726a9" href="#"
                                                                       className="bt-secondary w-button">Clear</a>
                                                                </div>
                                                            </section>
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
                                        <div data-w-tab="Info" className="w-tab-pane">
                                            <div className="card-id-header">
                                                <div className="div-block-72">
                                                    <div className="card-id-header">
                                                        <div><strong>Why Delegate ?</strong></div>
                                                        <p className="subptitle nm">Please ensure the delegate you
                                                            are entering has been registered to participate in the
                                                            baking protocol and not full.<br/>We are an
                                                            internation<strong> Tezos <br/>Delagation service
                                                                from cycle 17.<br/>‍<br/></strong>Delegate with us
                                                            and support the ongoing development of the Tezos
                                                            blockchain and Elite Tezos. &nbsp;Delegation is easy
                                                            just takes two minutes of your time. <strong>Get
                                                                8%&nbsp;XTZ&nbsp;return per year on your Tezos
                                                                delegated.<br/><br/></strong>Your can check our <a
                                                                href="https://www.elitetezos.com/"
                                                                target="_blank">baker website</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-w-tab="Send to email 3" className="w-tab-pane">
                            <div className="card-id-header">
                                <div className="div-block-72">
                                    <div className="form-block-2 w-form">
                                        <form id="email-form-2" name="email-form-2" data-name="Email Form 2">
                                            <section className="section-custom-top">

                                            </section>
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
                                            <section className="section-custom-top">
                                                <div className="w-layout-grid grid-2 nm">
                                                    <div id="w-node-f9ee8fba3a62-0e2726a9" className="div-field-2">
                                                        <p className="field-label-2"><strong>Name</strong></p><input
                                                        type="text" className="text-field-3 w-input" maxLength="256"
                                                        name="Code-Id-3" data-name="Code Id 3"
                                                        placeholder="Delegator 3" data-toggle="date" id="Code-Id-3"
                                                        required=""/></div>
                                                    <a id="w-node-f9ee8fba3a67-0e2726a9" href="#"
                                                       className="bt-main-3 w-button">Save card</a>
                                                    <div id="w-node-f9ee8fba3a69-0e2726a9" className="div-field-2">
                                                        <p className="field-label-2">Fees <strong>ꜩ</strong></p>
                                                        <select id="bakers" name="Gender-2" data-name="Gender 2"
                                                                className="select-field-2 w-select">
                                                            <option value="Low - 1420 μꜩ">Low - 1420 μꜩ</option>
                                                            <option value="Medium - 5000 μꜩ">Medium - 5000 μꜩ
                                                            </option>
                                                            <option value="Hight - 30000 μꜩ">Hight - 30000 μꜩ
                                                            </option>
                                                        </select></div>
                                                    <a id="w-node-f9ee8fba3a6f-0e2726a9" href="#"
                                                       className="bt-secondary w-button">Clear</a>
                                                    <div id="w-node-f9ee8fba3a71-0e2726a9" className="div-field-2">
                                                        <p className="field-label-2"><strong>Amount ꜩ to
                                                            delegate</strong></p><input type="text"
                                                                                        className="text-field-3 w-input"
                                                                                        maxLength="256"
                                                                                        name="Amount-2"
                                                                                        data-name="Amount 2"
                                                                                        placeholder="0.000 ꜩ"
                                                                                        data-toggle="date"
                                                                                        id="Amount-2" required=""/>
                                                    </div>
                                                    <div id="w-node-f9ee8fba3a76-0e2726a9" className="div-field-2">
                                                        <p className="field-label-2">Baker address for delegate</p>
                                                        <select id="bakers" name="Gender-2" data-name="Gender 2"
                                                                className="select-field-2 w-select">
                                                            <option value="">Select one baker</option>
                                                            <option
                                                                value="tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk">tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk
                                                                (FULL)
                                                            </option>
                                                            <option
                                                                value="tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk">tz2W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk
                                                                (34%)
                                                            </option>
                                                            <option
                                                                value="tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk">tz3W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk
                                                                (78%)
                                                            </option>
                                                            <option
                                                                value="tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk">tz4W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk
                                                                (98%)
                                                            </option>
                                                            <option
                                                                value="tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk">tz5W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk
                                                                (34%)
                                                            </option>
                                                            <option
                                                                value="tz1W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk">tz6W1f1JrE7VsqgpUpj1iiDobqP5TixgZhDk
                                                                (45%)
                                                            </option>
                                                        </select></div>
                                                </div>
                                            </section>
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
        </div>)
};


export default Delegate
