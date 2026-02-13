const { ethers } = require("ethers");
const config = require("./config");

async function runIndexer() {
  console.log("--- Initializing Indexer ---");
  
  const provider = new ethers.WebSocketProvider(config.WSS_PROVIDER);
  const contract = new ethers.Contract(config.CONTRACT_ADDRESS, config.ABI, provider);

  console.log(`Monitoring: ${config.EVENT_NAME} on ${config.CONTRACT_ADDRESS}`);

  contract.on(config.EVENT_NAME, (from, to, value, event) => {
    const data = {
      from,
      to,
      value: ethers.formatUnits(value, 6), // Adjust decimals per token
      blockNumber: event.log.blockNumber,
      transactionHash: event.log.transactionHash
    };

    console.log("--- New Event Indexed ---");
    console.log(JSON.stringify(data, null, 2));
    
    // Here you would typically save to a database like MongoDB or PostgreSQL
  });

  provider.on("error", (error) => {
    console.error("Provider Error:", error);
  });
}

runIndexer().catch(console.error);
