const express = require('express');
const path = require('path');
const router = require('./routes/router');
const PORT = 5000;
const app = express();

app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/assets', express.static(path.join(__dirname, 'views/assets')));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');


app.use('/', router);

app.listen(PORT, ()=>{console.log(`Server running in port ${PORT}`)})