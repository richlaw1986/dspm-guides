module.exports = function(eleventyConfig) {
  // Copy public assets
  eleventyConfig.addPassthroughCopy("public");
  
  // Add Nunjucks as template engine
  eleventyConfig.addTemplateFormats("njk");
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};