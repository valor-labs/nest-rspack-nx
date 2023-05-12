const { composePlugins, withNx } = require('@nx/rspack');

module.exports = composePlugins(withNx(), (config) => {
  return config;
});
