import React, {Component} from 'react';
import '../assets/template.css'

// import ezdun from './libs/crypto/ezdun/src/main'
import eztz from './libs/crypto/eztz/src/main'

import {saveKeys} from "./libs/FileService";
// import {rpc, defaultProvider, crypto, node} from "ezdun-lib"

class Send extends Component {
    constructor() {
        super();
        this.state = {
            transferAddr: '',
            transferFee: 0,
            transferAmount: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.sendTransaction = this.sendTransaction.bind(this);
        this.setDelegate = this.setDelegate.bind(this);
        this.createDelegationAddr = this.createDelegationAddr.bind(this)
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value});
    }

    render() {

        return (
            <div className="main-div">
                <h2>Node address:</h2>
                <h3>{eztz.eztz.node.activeProvider}</h3>

                <div>
                    <form>
                        <label htmlFor="transferAddr">Address:<br/>
                            <input name="transferAddr"
                                   value={this.state.transferAddr}
                                   onChange={this.handleChange}
                                   placeholder="Address"/>
                        </label>
                    </form>
                </div>
                <div>
                    <form>
                        <label htmlFor="transferAmount">Amount:<br/>
                            <input name="transferAmount"
                                   value={this.state.transferAmount}
                                   onChange={this.handleChange}
                                   placeholder="0.0"/>
                        </label>
                    </form>
                </div>
                <div>
                    <form>
                        <label htmlFor="transferFee">Fees:<br/>
                            <input name="transferFee"
                                   value={this.state.transferFee}
                                   onChange={this.handleChange}
                                   placeholder="0.0"/>
                        </label>
                    </form>
                </div>

                <div>
                    <button onClick={this.sendTransaction} className="savebtn">Send</button>
                </div>

                <div>
                    <button onClick={this.setDelegate} className="savebtn">Set Delegate</button>
                </div>

                <div>
                    <button onClick={this.createDelegationAddr} className="savebtn">Create KT address</button>
                </div>
            </div>
        )
    }

    sendTransaction() {
        console.log(eztz.eztz.node.activeProvider);

        eztz.eztz.node.debugMode = true;
        
        // todo: DUNE alphanet-NODE
        // eztz.eztz.node.setProvider('http://testnet-node.dunscan.io');

        // todo: TEZOS alphanet-NODE
        eztz.eztz.node.setProvider('https://rpc.tzkt.io/babylonnet');

        console.log(eztz.eztz.node.activeProvider);
        let k = eztz.eztz.crypto.extractKeys("edsk3YnikQPRzsk2ALCVEWg8K3vTfpe7tVKEN1ubpAbjNoQ7CSisd1");
        console.log(k);

        eztz.eztz.rpc.getBalance(k.pkh).then(function (res) {
            console.log(res / 1000000)
        }).catch(function (e) {
            console.log(e)
        });


        eztz.eztz.rpc.transfer(
            k.pkh,
            k,
            this.state.transferAddr,
            this.state.transferAmount,
            this.state.transferFee,
            undefined,
            15000,
            "0",
            "0"
        )
            .then((resp) => console.log(resp));
    }

    setDelegate() {
        console.log(eztz.eztz.node.activeProvider);

        eztz.eztz.node.debugMode = true;

        // todo: DUNE alphanet-NODE
        // eztz.eztz.node.setProvider('http://testnet-node.dunscan.io');

        // todo: TEZOS alphanet-NODE
        eztz.eztz.node.setProvider('https://rpc.tzkt.io/babylonnet');

        console.log(eztz.eztz.node.activeProvider);
        let k = eztz.eztz.crypto.extractKeys("edsk3YnikQPRzsk2ALCVEWg8K3vTfpe7tVKEN1ubpAbjNoQ7CSisd1");
        console.log(k);

        eztz.eztz.rpc.getBalance(k.pkh).then(function (res) {
            console.log(res / 1000000)
        }).catch(function (e) {
            console.log(e)
        });


        eztz.eztz.rpc.setDelegate(
            k.pkh,
            k,
            this.state.transferAddr,
            this.state.transferFee,
            15000,
            "0"
        )
            .then((resp) => console.log(resp));
    }

    // fixme OBSOLETE FOR TEZOS
    createDelegationAddr() {

        console.log(eztz.eztz.node.activeProvider);

        eztz.eztz.node.debugMode = true;

        // todo: DUNE alphanet-NODE
        // eztz.eztz.node.setProvider('http://testnet-node.dunscan.io');

        // todo: TEZOS alphanet-NODE
        eztz.eztz.node.setProvider('https://rpc.tzkt.io/babylonnet');

        console.log(eztz.eztz.node.activeProvider);
        let k = eztz.eztz.crypto.extractKeys("edsk3YnikQPRzsk2ALCVEWg8K3vTfpe7tVKEN1ubpAbjNoQ7CSisd1");
        console.log(k);

        eztz.eztz.rpc.originate(k, 0, '', 'Unit', true, true, true, 5000, 100000, 500)
            .then(console.log)
    }
}

export default Send
