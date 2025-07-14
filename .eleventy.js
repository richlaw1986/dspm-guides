module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"public/css": "css"});
  eleventyConfig.addCollection("guides", function(collectionApi) {
    return collectionApi.getFilteredByGlob("guides/*.md");
  });
  
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};