// const fs = window.require('fs');
// const electron = window.require('electron');
const CryptoJS = require("crypto-js");

export const saveKeys = (pair, password, encoding = 'utf-8') => {
    // let path = `${electron.remote.app.getPath('userData')}/backup.json`;
    //
    // try {
    //     if (fs.existsSync(path)) {
    //         pair.private = CryptoJS.AES.encrypt(pair.private, password).toString();
    //         let wallets = JSON.parse(readKeys()).wallets;
    //         let keys = new Map(wallets);
	// 		keys.set(pair.public, pair.private);
	// 		console.log(keys);
    //         fs.writeFileSync(path, JSON.stringify({wallets: [...keys]}), 'utf-8');
    //     } else {
    //         let keys = new Map();
    //         pair.private = CryptoJS.AES.encrypt(pair.private, password);
    //         keys.set(pair.public, pair.private);
    //         fs.writeFileSync(path, JSON.stringify({wallets: [...keys]}), 'utf-8');
    //     }
    // } catch (e) {
    //     console.error(e);
    // }
};

export const decryptKey = (pkh, password) => {
    let wallets = JSON.parse(readKeys()).wallets;
    let keys = new Map(wallets);
    let encryptKek = keys.get(pkh);
    let decryptKey = CryptoJS.AES.decrypt(encryptKek, password).toString(CryptoJS.enc.Utf8);
    return decryptKey
};

export const getWalletsList = () => JSON.parse(readKeys()).wallets;

const readKeys = () => {
    // let path = `${electron.remote.app.getPath('userData')}/backup.json`;
    //
    // try {
    //     let data = fs.readFileSync(path, 'utf-8');
    //     console.log(data.toString());
    //     return data
    // } catch (e) {
    //     console.error(e);
    //     throw e
    // }
};
