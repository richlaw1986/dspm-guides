module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");
  
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};