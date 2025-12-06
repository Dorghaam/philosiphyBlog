# my philosophy blog

a simple blog about philosophy that uses ghost cms and eleventy to show posts.

## what is this project?

this is a blog website about philosophy. it lets me write blog posts in a nice admin panel (ghost cms) and then shows them on a website (made with eleventy). i dont have to write code to add new posts, i just use the ghost admin panel like a normal blog website.

## how it works

the project has two parts:

1. **ghost cms** - this runs in docker and gives me a place to write and manage blog posts
2. **eleventy blog** - this is the actual website that people see. it gets the posts from ghost and shows them nicely

## how to set everything up

### step 1: make sure you have these installed

- node.js (version 18 or higher)
- docker desktop
- npm (comes with node.js)

### step 2: start ghost cms

ghost runs in docker. here is how to start it:

1. open docker desktop and make sure it is running
2. open your terminal
3. go to the ghost docker folder:
   ```
   cd path/to/assignment-2-sample/ghost-cms/docker
   ```
4. start ghost:
   ```
   docker-compose build && docker-compose up -d
   ```
5. ghost is now running at http://localhost:2368

### step 3: set up ghost admin

1. open http://localhost:2368/ghost in your browser
2. create your admin account (name, email, password)
3. you are now in the ghost admin panel

### step 4: create some posts

1. in ghost admin, click "posts" on the left
2. click "new post"
3. write your post
4. click the settings gear icon on the right
5. scroll down to "tags" and add the tag "posts"
6. click "publish" to publish the post
7. make 2 or 3 posts so you have content

### step 5: get your api key

the eleventy blog needs a key to talk to ghost:

1. in ghost admin, click "settings" (gear icon in bottom left)
2. click "integrations"
3. click "add custom integration"
4. name it something like "my blog"
5. copy the "content api key" (long string of letters and numbers)
6. open `eleventy.config.js` in your code editor
7. find the line that says `key: "your key here"`
8. paste your api key there

### step 6: install the blog dependencies

1. open terminal
2. go to your philosophy-blog folder:
   ```
   cd path/to/philosophy-blog
   ```
3. install the packages:
   ```
   npm install
   ```

### step 7: run the blog

1. make sure ghost is still running in docker
2. in your terminal (in the philosophy-blog folder), run:
   ```
   npm start
   ```
3. open your browser and go to http://localhost:8080
4. you should see your blog with the posts from ghost!

## how to add new posts later

1. make sure ghost is running (docker-compose up -d)
2. go to http://localhost:2368/ghost
3. write a new post
4. add the "posts" tag
5. publish it
6. refresh your blog website and the new post will show up

## how to stop everything

to stop ghost:
```
cd path/to/ghost-cms/docker
docker-compose down
```

to stop the blog:
press ctrl+c in the terminal where npm start is running

## what each file does

- **eleventy.config.js** - this is the brain of the site. it tells eleventy how to build the blog and how to connect to ghost
- **index.njk** - this is the home page that shows a list of all posts
- **posts.njk** - this shows all posts with pagination (2 posts per page)
- **single-post.njk** - this is a template that creates one page for each post from ghost
- **search.njk** - this is the search page where you can search for posts
- **base.njk** - this is in the _includes folder and makes all pages look similar
- **public/css/style.css** - this makes the blog look nice with colors and styling
- **_site/** - this folder gets created when you run npm start. it has all the finished web pages

## what changed from before

**before:**
- i wrote posts in markdown files (.md files) in a posts folder
- every time i wanted a new post i had to create a new file and write code

**now:**
- i write posts in ghost cms admin panel (like wordpress)
- i just click buttons and type, no code needed
- ghost stores all the posts
- eleventy asks ghost for the posts and builds the website

**why this is better:**
- easier to write posts
- can add images by dragging and dropping
- can save drafts
- can schedule posts for later
- dont have to touch code files to write a blog post

## features

- shows all blog posts from ghost
- pagination (2 posts per page on the all posts page)
- search functionality (can search posts by title or content)
- filtering by tag (only shows posts tagged with "posts")
- nice styling with earth tones and card design
- responsive layout that looks good

## important note about localhost vs 127.0.0.1

in the eleventy.config.js file, i use `http://127.0.0.1:2368` instead of `http://localhost:2368` for the ghost url. this is because the ghost api library was trying to connect using ipv6 (::1) but ghost only listens on ipv4 (127.0.0.1). using 127.0.0.1 fixes this connection issue.

## if something goes wrong

**ghost wont start:**
- make sure docker desktop is running
- try `docker-compose down` then `docker-compose up -d` again

**blog shows no posts:**
- make sure ghost is running
- make sure your posts have the "posts" tag in ghost
- make sure the api key in eleventy.config.js is correct
- try stopping the blog (ctrl+c) and starting it again (npm start)

**connection refused error:**
- make sure ghost is running on port 2368
- check that nothing else is using port 2368
- try using 127.0.0.1 instead of localhost in the config

## made by

dorghaam haidar

for inft3102 assignment 2
