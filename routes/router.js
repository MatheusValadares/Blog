const express = require('express');
const router = express.Router();

const cards = [

   {
      id: 0,
      img: "/assets/livro.jpg",
      type: "Hardware",
      title: "What is Lorem Ipsum?",
      introduction: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "http://localhost:5000/home",
      date: "10/02/2024"
   },

   {
      id: 1,
      img: "/assets/livro.jpg",
      type: "Redes",
      title: "What is Lorem Ipsum?",
      introduction: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "http://localhost:5000/home",
      date: "10/02/2024"
   },

   {
      id: 2,
      img: "/assets/livro.jpg",
      type: "Hardware",
      title: "What is Lorem Ipsum?",
      introduction: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "http://localhost:5000/home",
      date: "10/02/2024"
   },

   {
      id: 3,
      img: "/assets/livro.jpg",
      type: "Hardware",
      title: "What is Lorem Ipsum?",
      introduction: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "http://localhost:5000/home",
      date: "10/02/2024"
   },

]

router.get('/home', (req, res) => {

   res.render('home', { cards });

});

router.get('/post', (req, res) => {

   res.render('post', { cards: [cards[0], cards[1]] });

});

router.get('/newpost', (req, res) => {

   res.render('newpost');

});



module.exports = router;