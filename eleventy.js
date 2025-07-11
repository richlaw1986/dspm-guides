module.exports = function(eleventyConfig) {
  // Copy public assets
  eleventyConfig.addPassthroughCopy("public");
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};