// node modules
const express = require('express');

// express server
const app = express()

//port
const PORT = process.env.PORT || 3000;

//express data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

//routes
require('./routes/api')

//app listener
app.listen(PORT, () => console.log(`App is listening on Port : ${PORT}`));

