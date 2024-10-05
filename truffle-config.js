module.exports = {
    // Define the networks Truffle can use
    networks: {
      // Configuration for the local development blockchain
      development: {
        host: "127.0.0.1", // Localhost (default: none)
        port: 8545,        // Standard Ethereum port (default: none)
        network_id: "*",   // Any network (default: none)
      },
    },
  
    // Specify the Solidity compiler version
    compilers: {
      solc: {
        version: "0.8.0", // Use a specific version of the Solidity compiler (default: truffle's default)
      },
    },
  
    // Add mocha settings if you want to customize test behavior
    mocha: {
      // timeout: 100000
    },
  };
  