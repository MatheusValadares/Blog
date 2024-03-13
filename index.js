const express = require('express');
const path = require('path');
const router = require('./routes/router');
const PORT = 5000;
const app = express();
const mongoose = require('mongoose');
const Post = require("./models/Post");

app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/assets', express.static(path.join(__dirname, 'views/assets')));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.use('/', router);

mongoose.connect('mongodb://localhost/blog');
let db = mongoose.connection;
db.on('error', () => { console.log(`Houve um erro no db`) });

db.once('open', () => {
  console.log('DB carregado')
})

app.listen(PORT, () => { console.log(`Server running in port ${PORT}`) })


// let link = new Post({
//   img: "/assets/livro.jpg",
//   type: "Hardware",
//   title: "teste",
//   introduction: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   link: "http://localhost:5000/home",
//   date: new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })
// })

// link.save().then(doc => {
//   console.log("doc adicionado");
// }).catch(error => { console.log(error) });
