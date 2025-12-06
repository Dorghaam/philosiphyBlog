# my philosophy blog


a simple blog about philosophy that uses ghost cms, eleventy, and a netlify function to show posts and a daily quote.


## what is this project?


this is a blog website about philosophy. it lets me write blog posts in a nice admin panel (ghost cms) and then shows them on a website (made with eleventy). i also added a netlify function that gets a random quote from the internet and shows it on the homepage.


## how it works


the project has three parts:


1. **ghost cms** - this runs in docker and gives me a place to write and manage blog posts

2. **eleventy blog** - this is the actual website that people see. it gets the posts from ghost and shows them in a very user friendly way.

3. **netlify function** - this is a pretty small piece of code that runs on a server and gets a random quote from an api that i fetched. it makes the site dynamically update quotes.


## what i added for assignment 3


for this assignment i added a netlify serverless function. here is what it does:


- the function is in netlify/functions/get-quote/get-quote.js

- it calls the zenquotes api to get a random quote

- the homepage shows this quote in a quote of the day section in the homescreen

- every time you refresh the page you get a new quote which is nice

- this is different from the professors example because his just returned a hardcoded answer but mine calls a real live api and updated everytime we refresh


## how to set everything up


### step 1: make sure you have these installed


- node.js (version 18 or higher)

- docker desktop

- npm with node

- netlify cli (run npm install -g netlify-cli to install it)


### step 2: start ghost cms


ghost runs in docker. here is how to start it:


1. open docker desktop and make sure it is running

2. open your terminal

3. go to the ghost docker folder where your docker-compose.yaml file is

4. start ghost:


   docker-compose up -d


5. ghost is now running at http://localhost:2368


### step 3: set up ghost admin


1. open http://localhost:2368/ghost in your browser

2. create your admin account name, email, and password

3. you are now in the ghost admin panel


### step 4: get your api key


the eleventy blog needs a key to talk to ghost:


1. in ghost admin, click settings

2. click integrations

3. click add custom integration

4. name it something like my blog or something specific

5. copy the content api key 

6. open eleventy.config.js in your code editor

7. find the line that says key: "your key here"

8. paste your api key there


### step 5: create some posts


1. in ghost admin, click posts on the left

2. click new post

3. write your post

4. click the settings gear icon on the right

5. scroll down to tags and add the tag posts (already setup for this tag)

6. click publish to publish the post

7. make 2 or 3 posts so you have content


### step 6: install the blog dependencies


1. open terminal

2. go to your philosophy-blog folder:


   cd path/to/philosophy-blog

   

3. install the packages:

  

   npm install

  


### step 7: run everything with netlify dev


this is the important part. netlify dev runs both the eleventy site and the netlify function together.


1. make sure ghost is still running in docker

2. in your terminal (in the philosophy-blog folder), run:

  

   netlify dev

  

3. open your browser and go to http://localhost:8888

4. you should see your blog with posts from ghost and a quote of the day


## how the netlify function works


the function is pretty simple. here is what it does step by step:


1. when the homepage loads, the javascript on the page calls /.netlify/functions/get-quote

2. this triggers the function in netlify/functions/get-quote/get-quote.js

3. the function uses fetch to call the zenquotes api

4. the api sends back a random quote

5. the function sends this quote back to the webpage

6. the webpage shows the quote in the quote of the day section


## how to add new posts later


1. make sure ghost is running docker-compose up -d

2. go to http://localhost:2368/ghost

3. write a new post

4. add the posts tag

5. publish it

6. refresh your blog website and the new post will show up


## how to stop everything


to stop ghost:


docker-compose down



to stop the blog:

press ctrl+c in the terminal where netlify dev is running


## what each file does


- **eleventy.config.js** - this tells eleventy how to build the blog and how to connect to ghost

- **index.njk** - this is the home page that shows the quote and a list of all posts

- **posts.njk** - this shows all posts with pagination (2 posts per page)

- **single-post.njk** - this is a template that creates one page for each post from ghost

- **search.njk** - this is the search page where you can search for posts

- **base.njk** - this is in the  _includes folder and makes all pages look similar

- **public/css/style.css** - this makes the blog look nice with colors and styling

- **netlify.toml** - this tells netlify where to find the functions and how to build the site

- **netlify/functions/get-quote/get-quote.js** - this is the serverless function that gets quotes from the api


## features


- shows all blog posts from ghost

- quote of the day section that gets a random quote from an api

- pagination (2 posts per page on the all posts page)

- search functionality (can search posts by title or content)

- filtering by tag (only shows posts tagged with "posts")

- nice styling with earth tones and card design


## if something goes wrong


**ghost wont start:**

- make sure docker desktop is running

- try docker-compose down then docker-compose up -d again


**blog shows no posts:**

- make sure ghost is running

- make sure your posts have the posts tag in ghost

- make sure the api key in eleventy.config.js is correct

- try stopping netlify dev (ctrl+c) and starting it again


**quote says could not load:**

- the quote api has a rate limit so if you refresh too much it stops working

- just wait a minute and try again


**connection refused error:**

- make sure ghost is running on port 2368

- check that nothing else is using port 2368


## made by


dorghaam haidar


for inft3102 assignment 3