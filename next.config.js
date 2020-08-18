const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withTM = require("next-transpile-modules")(["autotrack"]);
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins([
  [withTM],
  [optimizedImages],
  [withBundleAnalyzer],
]);
