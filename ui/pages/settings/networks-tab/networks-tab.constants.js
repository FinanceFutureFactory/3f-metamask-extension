import {
  MAINNET,
  MAINNET_CHAIN_ID,
  ETH_SYMBOL,
  MAINNET_RPC_URL,
} from '../../../../shared/constants/network';

const defaultNetworksData = [
  {
    labelKey: MAINNET,
    iconColor: '#29B6AF',
    providerType: MAINNET,
    rpcUrl: MAINNET_RPC_URL,
    chainId: MAINNET_CHAIN_ID,
    ticker: ETH_SYMBOL,
    blockExplorerUrl: 'https://etherscan.io',
  },
];

export { defaultNetworksData };
