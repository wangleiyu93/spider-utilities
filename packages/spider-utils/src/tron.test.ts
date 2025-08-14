import TronAccountChecker from './tron';

describe('TronAccountChecker', () => {
  const checker = new TronAccountChecker();
  const address = 'TT2T17KZhoDu47i2E4FWxfG79zdkEWkU9N';

  it('should return account info when account exists', async () => {
    const info = await checker.getAccountInfo(address);

    expect(info).toEqual({
      address,
      activated: true,
      balance: '351419301.943827',
    });
  });
});
