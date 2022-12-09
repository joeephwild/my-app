require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({path: '.env'});

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;
const MATIC_PRIVATE_KEY = process.env.MATIC_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: 'matic',
  networks: {
    matic: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [`0x${MATIC_PRIVATE_KEY}`]
    }
  }
};
