const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require("../models/Post");


router.get('/home', async (req, res) => {

   try {
      let cards = await Post.find({});
      res.render('home', { cards });
   } catch (error) {
      res.send(error)
   }


});


router.get('/post/:title', async (req, res) => {

   let title = req.params.title;

   try {

      let post = await Post.findOne({ title });
      let cards = await Post.find({});
      console.log(cards)
      res.render('post', { post, cards });
   } catch (error) {
      res.send(error)
   }

})

router.get('/newpost', (req, res) => {

   res.render('newpost');

});



module.exports = router;