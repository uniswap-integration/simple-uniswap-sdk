import { BigNumberish } from 'ethers';
import { ContractContext as FactoryContractContext } from '../../../ABI/types/uniswap-factory-v3';
import { EthersProvider } from '../../../ethers-provider';
import { UniswapContractContextV3 } from '../../../uniswap-contract-context/uniswap-contract-context-v3';

export class UniswapContractFactoryV3 {
  private _uniswapFactoryContract = this._ethersProvider.getContract<FactoryContractContext>(
    JSON.stringify(UniswapContractContextV3.factoryAbi),
    UniswapContractContextV3.factoryAddress
  );

  constructor(private _ethersProvider: EthersProvider) {}

  public createPool(tokenA: string, tokenB: string, fee: BigNumberish): string {
    return this._uniswapFactoryContract.interface.encodeFunctionData(
      'createPool',
      [tokenA, tokenB, fee]
    );
  }

  public async getPool(
    token0: string,
    token1: string,
    fee: BigNumberish
  ): Promise<string> {
    return await this._uniswapFactoryContract.getPool(token0, token1, fee);
  }

  public enableFeeAmount(fee: BigNumberish, tickSpacing: BigNumberish): string {
    return this._uniswapFactoryContract.interface.encodeFunctionData(
      'enableFeeAmount',
      [fee, tickSpacing]
    );
  }

  public feeAmountTickSpacing(parameter0: BigNumberish): string {
    return this._uniswapFactoryContract.interface.encodeFunctionData(
      'feeAmountTickSpacing',
      [parameter0]
    );
  }
}
