// this file tells eleventy how to work and sets up the basic rules for my website

module.exports = function (eleventyConfig) {

  // this copies my css file to the final websiteit takes files from public folder and puts them in the output
  eleventyConfig.addPassthroughCopy({
    "./public/": "/",
  });

  // check if we are running locally or on netlify process.env.NETLIFY is set to true when building on netlify
  const isNetlify = process.env.NETLIFY === "true";

  if (isNetlify) {
    // we are on netlify so use sample posts ghost is not available online so we use fake posts
    eleventyConfig.addGlobalData("posts", function () {
      return [
        {
          title: "what is the meaning of life",
          slug: "meaning-of-life",
          html: "<p>this is a sample post about the meaning of life. when running locally with ghost cms you will see real posts here.</p>",
          excerpt: "a post about the meaning of life",
        },
        {
          title: "why do we exist",
          slug: "why-do-we-exist",
          html: "<p>this is a sample post about existence. when running locally with ghost cms you will see real posts here.</p>",
          excerpt: "a post about why we exist",
        },
        {
          title: "what is happiness",
          slug: "what-is-happiness",
          html: "<p>this is a sample post about happiness. when running locally with ghost cms you will see real posts here.</p>",
          excerpt: "a post about happiness",
        },
      ];
    });
  } else {
    // we are running locally so use ghost cms
    const ghostContentAPI = require("@tryghost/content-api");

    // set up the connection to ghost
    const api = new ghostContentAPI({
      url: "http://127.0.0.1:2368",
      key: "92ba83677d834f90c1e2d2400a",
      version: "v5.0",
    });

    // get posts from ghost
    eleventyConfig.addGlobalData("posts", function () {
      return api.posts.browse({ filter: "tag:posts" }).catch(function (err) {
        console.error(err);
        return [];
      });
    });
  }

};
