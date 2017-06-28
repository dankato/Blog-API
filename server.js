const express = require('express');
const morgan = require('morgan');
const postRouter = require('./router');
const app = express();
const {BlogPosts} = require('./models');

app.use(morgan('common'));
app.use(express.static('public'));


app.get('/blog-posts', (req, res) => {
  res.json(BlogPosts.get());
});

app.use('/blog-posts', postRouter);

app.listen(process.env.PORT || 8080, () => {
    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});