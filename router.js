'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const jsonParser = bodyParser.json();



//.get -> /blog-posts
const {BlogPosts} = require('./models');

// create
BlogPosts.create("Romeo", "are you a string", "Karl");


//.get
router.get('/blog-posts', (req, res) => {
    res.json(BlogPosts.get());
})

//.post -> /blog-posts
router.post('/blog-posts', (req, res) => {
    
})

//.delete -> /blog-posts/:id
//.put -> /blog-posts/:id

// router -> blog-posts

module.exports = router;