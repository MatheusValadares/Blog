const express = require('express');
const path = require('path');
const router = require('./routes/router');
const PORT = 5000;
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog');
let db = mongoose.connection;
db.on('error', () => { console.log(`Houve um erro no db`) });
db.once('open', () => { console.log('DB carregado') })

app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/assets', express.static(path.join(__dirname, 'views/assets')));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');


app.use('/', router);


app.listen(PORT, () => { console.log(`Server running in port ${PORT}`) })  