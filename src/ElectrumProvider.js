require('dotenv').config();
const WebSocket = require('ws');

class ElectrumProvider {
    constructor(url) {
        this.url = url;
        this.ws = new WebSocket(url);
        this.id = 0;
    }

    async call(method, params = []) {
        return new Promise((resolve, reject) => {
            const request = {
                id: ++this.id,
                method,
                params,
            };

            this.ws.send(JSON.stringify(request));
            this.ws.on('message', (data) => {
                const response = JSON.parse(data);
                if (response.id === request.id) {
                    resolve(response.result);
                }
            });

            this.ws.on('error', reject);
        });
    }

    async getBlock(hash) {
        return await this.call('blockchain.block.get_header', [hash]);
    }

    async getTransaction(txid) {
        return await this.call('blockchain.transaction.get', [txid]);
    }
}

module.exports = ElectrumProvider;
