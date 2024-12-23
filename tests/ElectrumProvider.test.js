const ElectrumProvider = require('../src/ElectrumProvider');

test('should fetch a block header from Electrum', async () => {
    const provider = new ElectrumProvider('ws://localhost:50001');
    jest.spyOn(provider, 'call').mockResolvedValue({ hash: 'blockhash', height: 100 });

    const block = await provider.getBlock('blockhash');
    expect(block).toEqual({ hash: 'blockhash', height: 100 });
});
