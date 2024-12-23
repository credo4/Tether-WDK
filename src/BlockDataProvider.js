require('dotenv').config();
class BlockDataProvider {
    constructor(provider) {
        this.provider = provider; // Peut être BitcoinCoreProvider ou ElectrumProvider
    }

    async getBlock(hash) {
        return await this.provider.getBlock(hash);
    }

    async getTransaction(txid) {
        return await this.provider.getTransaction(txid);
    }
}

module.exports = BlockDataProvider;
