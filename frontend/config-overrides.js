const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "src/components",
    "@rtk": "src/rtk",
    "@api": "src/api",
  })(config);

  return config;
};
