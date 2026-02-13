module.exports = {
  WSS_PROVIDER: "wss://eth-mainnet.g.alchemy.com/v2/your-api-key",
  CONTRACT_ADDRESS: "0xdAC17F958D2ee523a2206206994597C13D831ec7", // Example: USDT
  EVENT_NAME: "Transfer",
  ABI: [
    "event Transfer(address indexed from, address indexed to, uint256 value)"
  ]
};
