// node modules
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
//express handles data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static('public'));
const archive = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));

//routes
app.get('/notes', function (req, res){res.sendFile(path.join(__dirname, './public/notes.html'))});

app.get('/api/notes', function (req,res){res.sendFile(path.join(__dirname, './db/db.json'))});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));