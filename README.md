# Blockchain Data Indexer

A high-performance indexing solution designed for Web3 developers who need to process and store smart contract events. This tool monitors specific contract addresses and transforms raw logs into a queryable local database format.

## Features
* **Event Listening:** Real-time monitoring of EVM-compatible contract events using WebSocket providers.
* **Data Transformation:** Formats raw hex data into human-readable JSON.
* **Scalable Architecture:** Built-in support for re-org handling and block confirmation delays.

## Architecture


## Setup
1. Define your contract ABI and address in `config.js`.
2. Configure your WebSocket RPC URL.
3. Run the indexer: `npm start`.

## License
MIT
