const solWeb3 = require("@solana/web3.js");

const createWallet = async () => {
  const wallet = solWeb3.Keypair.generate();
  // console.log(wallet.secretKey.valueOf());
  return {
    address: wallet.publicKey.toString(),
    privateKey: Object.values(wallet.secretKey.valueOf()),
  };
};

module.exports = createWallet;
