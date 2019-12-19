const pkg = require('./package.json');

module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${pkg.name}` : '',
};
