const BitcoinCoreProvider = require('../src/BitcoinCoreProvider');

test('should fetch a block from Bitcoin Core', async () => {
    const provider = new BitcoinCoreProvider('http://localhost:8332', 'user', 'password');
    jest.spyOn(provider, 'call').mockResolvedValue({ hash: 'blockhash', height: 100 });

    const block = await provider.getBlock('blockhash');
    expect(block).toEqual({ hash: 'blockhash', height: 100 });
});
