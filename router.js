'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const jsonParser = bodyParser.json();
const {BlogPosts} = require('./models');
router.use(jsonParser);

// create
BlogPosts.create("Romeo", "are you a string", "Karl");

//.post -> /blog-posts
router.post('/', jsonParser, (req, res) => {
    const requiredFields = ['title', 'content', 'author', 'publishDate'];
    for(let i=0; i<requiredFields.length; i++) {
        const field = requiredFields[i];
        if(!(field in req.body)) {
            console.error('you are missing fields');
            return res.status(400).send(message);
        }
    }
    const item = BlogPosts.create(req.body.title, req.body.content, req.body.author, req.body.publishDate);
    res.status(201).json(item);
});

//.get -> /blog-posts
router.get('/', (req, res) => {
    res.json(BlogPosts.get());
})

//.delete -> /blog-posts/:id
router.delete('/:id', (req, res) => {
    BlogPosts.delete(req.params.id);
    console.log(`Deleted this guy here ${req.params.id}`);
    res.status(204).end();
})

//.put -> /blog-posts/:id


module.exports = router;