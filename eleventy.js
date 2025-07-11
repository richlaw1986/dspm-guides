const path = require("path");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");
  
  // Set the includes directory explicitly
  eleventyConfig.setLayoutsDirectory("src/_includes");
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};