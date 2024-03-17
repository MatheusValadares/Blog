const mongoose = require('mongoose');
const Post = require("../models/Post");


const getPostsHome = async (req, res) => {

  try {
    let cards = await Post.find({});
    res.render('home', { cards });
  } catch (error) {
    res.send(error)
  }

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

  let post = new Post(req.body);

  try {

    let doc = await post.save();
    res.send(doc);

  } catch (error) {
    res.send(error)
  }


}

module.exports = { getPostsHome, getPost, createPost };