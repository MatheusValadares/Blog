const mongoose = require('mongoose');
const Post = require("../models/Post");
const path = require('path');


const getPostsHome = async (req, res) => {

  try {
    let cards = await Post.find({});
    res.render('home', { cards });
  } catch (error) {
    res.send(error)
  }

}

const getNewPost = (req, res) => {

  res.render('newpost');

}


const getPost = async (req, res) => {

  let title = req.params.title;

  try {

    let post = await Post.findOne({ title });
    let cards = await Post.find({});
    if (post && cards) {
      res.render('post', { post, cards });
    } else {
      res.send("pagina não encontrada")
    }
  } catch (error) {
    res.send(error)
  }

}

const createPost = async (req, res) => {

  const dateNow = new Date();
  let post = req.body;
  post.date = dateNow.toDateString();
  post.link = path.join(__dirname, `post/${post.title}`);

  let newPost = Post(post);

  try {

    let doc = await newPost.save();
    res.send(doc);

  } catch (error) {
    res.send(error)
  }


}

module.exports = { getPostsHome, getNewPost, getPost, createPost };