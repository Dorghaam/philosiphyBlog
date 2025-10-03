// this file tells eleventy how to work and sets up the basic rules for your website

module.exports = function (eleventyConfig) {

  // this copies your css file to the final website it takes files from public folder and puts them in the output
  eleventyConfig.addPassthroughCopy({
    "./public/": "/",
  });

  // this makes a collection of all posts so we can show them on the home page
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts");
  });

};
