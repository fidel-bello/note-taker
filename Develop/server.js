//modules
const express = require('express');
const app = express()

// port 
const PORT = process.env.PORT || 3000;

//data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

//routes
require('./routes/api')(app);
require('./routes/html')(app);

//app listener
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
