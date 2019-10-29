import React, {Component} from 'react';
import '../assets/template.css'

import {saveKeys} from "../libs/FileService";
import {crypto} from "eztz-lib"

class Import extends Component {
    constructor() {
        super();
        this.state = {
            isUnlockByPrivateKey: true,
            encryptPassword: '',
            mnemonicPassword: '',
            mnemonicPhrase: '',
            privateKey: '',
            errorMsg: null
        };
        this.changeUnlockWay = this.changeUnlockWay.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.saveNewWallet = this.saveNewWallet.bind(this)
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value});
    }

    changeUnlockWay() {
        this.setState(prevState => {
                console.log(prevState.isUnlockByPrivateKey);
                return {isUnlockByPrivateKey: !prevState.isUnlockByPrivateKey}
            }
        )
    }

    render() {
        let currentUnlockWay = this.state.isUnlockByPrivateKey ? "private key" : "mnemonic phase";
        let otherUnlockWay = !this.state.isUnlockByPrivateKey ? "private key" : "mnemonic phase";

        console.log(this.state.errorMsg);
        return (
            <div className="main-div">
                <h2>Import new wallet by {currentUnlockWay}</h2>

                <div className="dropdown" id="dropdown-id">
                    <button onClick={this.changeUnlockWay}>Import by {otherUnlockWay}</button>
                </div>

                {this.state.isUnlockByPrivateKey ?
                    <div id="form-private">
                        <form>
                            <label htmlFor="private-key">Private key:<br/>
                                <textarea name="privateKey"
                                          value={this.state.privateKey}
                                          onChange={this.handleChange}
                                          placeholder="Private key">

                                </textarea>
                            </label>
                        </form>
                    </div>
                    :
                    <div id="form-mnemonic">
                        <form>
                            <label htmlFor="mnemonic-phrase">Mnemonic phrase:<br/>
                                <textarea name="mnemonicPhrase"
                                          value={this.state.mnemonicPhrase}
                                          onChange={this.handleChange}
                                          placeholder="Mnemonic phrase"/>
                            </label>
                        </form>
                        <label>
                            <input name="mnemonicPassword"
                                   type="password"
                                   onChange={this.handleChange}
                                   value={this.state.mnemonicPassword}
                                   placeholder="********"/>
                        </label>
                    </div>
                }

                <div id="encrypt-pass">
                    <label htmlFor="encrypt-pass">Password for encrypting:<br/>
                        <input name="encryptPassword"
                               type="password"
                               onChange={this.handleChange}
                               value={this.state.encryptPassword}
                               placeholder="********"/>
                    </label>
                    <p id="password-strength" className="empty">Enter password</p>
                    {/*<button id="next-btn" className="nextbtn">Next</button>*/}
                </div>

                <div id="save">
                    <button onClick={this.saveNewWallet} className="savebtn">Save</button>
                    {/*<button id="back-btn" className="backbtn">Back</button>*/}
                </div>
                {this.state.errorMsg ?
                    <div className="very-weak">
                        <h3>{this.state.errorMsg}</h3>
                    </div>
                    :
                    <div>

                    </div>}

                {/*<div id="save">*/}
                {/*    <button id="back-btn" onClick={this.saveNewWallet} className="backbtn">Write</button>*/}
                {/*</div>*/}

                {/*<div id="save">*/}
                {/*    <button id="back-btn" onClick={this.read} className="backbtn">Read</button>*/}
                {/*</div>*/}
            </div>
        )
    }

    saveNewWallet() {
        this.state.errorMsg = null;

        let keys;
        if (this.state.isUnlockByPrivateKey) {
            keys = crypto.extractKeys(this.state.privateKey);
            if (typeof keys === 'object') {
                saveKeys({public: keys.pkh, private: keys.sk}, this.state.encryptPassword)
            } else {
                this.setState(prevState => {
                        return {errorMsg: "PrivateKey Incorrect"}
                    }
                )
            }
        } else {
            keys = crypto.generateKeys(this.state.mnemonicPhrase, this.state.mnemonicPassword);
            saveKeys({public: keys.pkh, private: keys.sk}, this.state.encryptPassword)
        }
    }
}

export default Import
