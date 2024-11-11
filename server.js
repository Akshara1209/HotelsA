const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();


const bodyParser = require('body-parser');
app.use(bodyParser.json()); //middleware used

const PORT = process.env.PORT|| 3000;

app.get('/',function(req,res){
    res.send('Welcome to my Hotel! How can I help');
})



const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu',menuRoutes);

// CRUD operations
// create - post
// read - get
//update - put/patch
// Delete - Delete

app.listen(PORT,()=>{
    console.log('listening on port 3000');
})