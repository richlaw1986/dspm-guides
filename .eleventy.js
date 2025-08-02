module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("dateISO", (dateObj) => {
	    if (!dateObj) return "";
	    return new Date(dateObj).toISOString().split('T')[0];
	  });
  eleventyConfig.addPassthroughCopy({"public/css": "css"});
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");
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