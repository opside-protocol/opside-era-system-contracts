import '@nomiclabs/hardhat-solpp';
import 'hardhat-typechain';
import '@nomiclabs/hardhat-ethers';
import '@matterlabs/hardhat-zksync-solc';

const systemConfig = require('./SystemConfig.json');

export default {
    zksolc: {
        version: '1.3.7',
        compilerSource: 'binary',
        settings: {
            isSystem: true
        }
    },
    zkSyncDeploy: {
        zkSyncNetwork: 'http://localhost:3050',
        ethNetwork: 'http://localhost:8545'
    },
    solidity: {
        version: '0.8.17'
    },
    solpp: {
        defs: (() => {
            return {
                ECRECOVER_COST_GAS: systemConfig.ECRECOVER_COST_GAS,
                KECCAK_ROUND_COST_GAS: systemConfig.KECCAK_ROUND_COST_GAS,
                SHA256_ROUND_COST_GAS: systemConfig.SHA256_ROUND_COST_GAS,
                native_name: process.env.native_name ? process.env.native_name : systemConfig.native_name,
                native_symbol: process.env.native_symbol ? process.env.native_symbol : systemConfig.native_symbol,
                decimals: process.env.decimals ? process.env.decimals : systemConfig.decimals,
                gas_token_address: process.env.gas_token_address ? process.env.gas_token_address : systemConfig.gas_token_address
            }
        })()
    },
    networks: {
        hardhat: {
            zksync: true
        }
    }
};
