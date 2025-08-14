import { TronWeb } from 'tronweb';

interface AccountInfo {
  address: string;
  activated: boolean;
  balance: string; // 单位 TRX
}

export default class TronAccountChecker {
  private tronWeb: TronWeb;

  constructor(fullHost?: string, privateKey?: string) {
    this.tronWeb = new TronWeb({
      fullHost: fullHost || 'https://api.trongrid.io',
      privateKey: privateKey || '01',
    });
  }

  /**
   * 查询账户信息
   * @param address TRON 地址
   */
  public async getAccountInfo(address: string): Promise<AccountInfo> {
    try {
      const account = await this.tronWeb.trx.getAccount(address);
      const balanceSun = account?.balance ?? 0; // 单位 Sun
      return {
        address,
        activated: !!account,
        balance: this.tronWeb.fromSun(balanceSun).toString(), // 转成 TRX
      };
    } catch (error) {
      // 账户未激活或错误
      return {
        address,
        activated: false,
        balance: '0',
      };
    }
  }

  /**
   * 查询账户余额
   * @param address TRON 地址
   */
  public async getBalance(address: string): Promise<string> {
    const info = await this.getAccountInfo(address);
    return info.balance;
  }

  /**
   * 判断账户是否激活
   * @param address TRON 地址
   */
  public async isActivated(address: string): Promise<boolean> {
    const info = await this.getAccountInfo(address);
    return info.activated;
  }
}
