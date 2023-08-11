const router = require('express').Router();
const { Blog, Comment, User } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({include:[Comment]});
    console.log(blogData)
    res.status(200).json(blogData);
  } catch (error) {
    res.status(500).json(error);
  }
  
});