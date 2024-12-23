require('dotenv').config();
const axios = require('axios');

class BitcoinCoreProvider {
    constructor(url, username, password) {
        this.url = url;
        this.auth = { username, password };
    }

    async call(method, params = []) {
        const response = await axios.post(this.url, {
            jsonrpc: "1.0",
            id: "wdk",
            method,
            params,
        }, {
            auth: this.auth,
        });
        return response.data.result;
    }

    async getBlock(hash) {
        return await this.call('getblock', [hash]);
    }

    async getTransaction(txid) {
        return await this.call('getrawtransaction', [txid, true]);
    }
}

module.exports = BitcoinCoreProvider;
