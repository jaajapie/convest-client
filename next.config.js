const moduleExports = {
  reactStrictMode: true,
  env: {
    MORALIS_APPID: process.env.MORALIS_APPID,
    MORALIS_SERVERURL: process.env.MORALIS_SERVERURL,
    API_URL: process.env.API_URL,
    RPC_URL: process.env.RPC_URL,
    NETWORK_ID: process.env.NETWORK_ID,
    DAPP_ID: process.env.DAPP_ID,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};

module.exports = moduleExports;
