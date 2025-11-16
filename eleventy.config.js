// this file tells eleventy how to work and sets up the basic rules for my website

const ghostContentAPI = require("@tryghost/content-api");

// set up the connection to ghost
const api = new ghostContentAPI({
  url: "http://localhost:2368",
  key: "2320e22a7c3166cb92c5dc14ab",
  version: "v5.0",
});

module.exports = function (eleventyConfig) {

  // this copies my css file to the final website it takes files from public folder and puts them in the output
  eleventyConfig.addPassthroughCopy({
    "./public/": "/",
  });

  // this gets all posts from ghost that have the tag posts and makes them available to my website as posts
  eleventyConfig.addGlobalData("posts", () =>
    api.posts.browse({ filter: "tag:posts" }).catch((err) => {
      console.error(err);
    })
  );

};
