const moduleExports = {
  reactStrictMode: true,
  env: {
    MORALIS_APPID: process.env.MORALIS_APPID,
    MORALIS_SERVERURL: process.env.MORALIS_SERVERURL,
    API_URL:process.env.API_URL
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
}


module.exports = moduleExports
