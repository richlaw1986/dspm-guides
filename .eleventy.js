module.exports = function(eleventyConfig) {
eleventyConfig.addPassthroughCopy({"public/css": "css"});
  // Create a collection for guides
  eleventyConfig.addCollection("guides", function(collectionApi) {
    return collectionApi.getFilteredByGlob("guides/*.md");
  });
  
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};