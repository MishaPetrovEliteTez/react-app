import React, {Component} from 'react';
import '../assets/template.css'

import {getWalletsList} from "./libs/FileService";

class Export extends Component {
    constructor() {
        super();
        this.state = {
            walletsList: getWalletsList(),


            isUnlockByPrivateKey: true,
            encryptPassword: '',
            mnemonicPassword: '',
            mnemonicPhrase: '',
            privateKey: '',
            errorMsg: null
        }
    }

    render() {
        const btnWallets = getWalletsList().map(it => <div>
            <button>{it[0]}</button>
        </div>);

        console.log(btnWallets);
        return (
            <div>
                {btnWallets}
            </div>
        )
    }
}

export default Export
