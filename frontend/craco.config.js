const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@rtk": path.resolve(__dirname, "src/rtk"),
      "@api": path.resolve(__dirname, "src/api"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
};
