const express = require('express');
const fs = require('fs')
const path = require('path');
const PORT = 5000;
const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');


app.get('/', (req, res)=>{

   res.render('home')
    
})

app.listen(PORT, ()=>{console.log(`Server running in port ${PORT}`)})