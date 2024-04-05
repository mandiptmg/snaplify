module.exports = {
  middleware: (config) => {
    config.middleware = [
      ...config.middleware,
      { name: 'authRedirect', path: './middlewares/authRedirect.js' },
    ];
    return config;
  },
};
