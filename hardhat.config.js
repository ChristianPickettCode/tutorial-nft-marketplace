require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
const polygonInfuraApiKey = fs.readFileSync(".polygon_mumbai").toString();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: polygonInfuraApiKey,
      accounts: [privateKey]
    },
    mainnet: {
      url: ``,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
