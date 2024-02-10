const express = require('express');
const router = express.Router();

router.get('/home', (req, res)=>{

   res.render('home');

});

router.get('/post', (req, res)=>{

    res.render('post');
 
 });

 router.get('/newpost', (req, res)=>{

    res.render('newpost');
 
 });



module.exports = router;