const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');


router.get('/home', postController.getPostsHome);


router.get('/post/:title', postController.getPost);

router.get('/newpost', postController.getNewPost);

router.post('/newpost/createpost', express.urlencoded({ extended: true }), postController.createPost);



module.exports = router;