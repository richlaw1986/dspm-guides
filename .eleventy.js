module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"public/css": "css"});
  
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};