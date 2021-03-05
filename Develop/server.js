// node modules
const express = require('express');
const fs = require('fs');

const app = express()
//routes
app.get('/notes', function (req, res){res.sendFile(path.join(__dirname, './public/notes.html'))});

app.get('/api/notes', function (req,res){res.sendFile(path.join(__dirname, './db/db.json'))});
