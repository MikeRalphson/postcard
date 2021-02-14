const pluginSEO = require('eleventy-plugin-seo');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginSEO, require("./src/_data/seo.json"));
  // Add a filter using the Config API
  //eleventyConfig.addFilter( "myFilter", function() {});

  // You can return your Config object (optional).
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/audio");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");
  return {
    dir: {
      // ⚠️ These values are both relative to your input directory.
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};

