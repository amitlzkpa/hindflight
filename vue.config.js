require('dotenv').config();
const path = require('path');

const SERVER_PORT = process.env.PORT || 8080;
const VUE_PORT = parseInt(SERVER_PORT) + 1;

module.exports = {
  outputDir: path.resolve(__dirname, "./build"),
  devServer: {
    port: VUE_PORT,
    progress: false,
    proxy: {
      "/api": {
        target: `http://localhost:${SERVER_PORT}/`,
        logLevel: "debug"
      }
    }
  }
};