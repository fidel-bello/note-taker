//module
const fs = require('fs');
const data = require('../db/db.json')

module.exports = function (app) {
    let postNote = data.length;
    app.get('/api/notes', function (req, res){
        res.json(data)
    });

    app.post('/api/notes', function (req, res){
        let savedNote = req.body;
        let id = '' + postNote;
        savedNote.id = id;
        postNote = postNote + 1;
        data.push(savedNote);
        fs.writeFile('./db/db.s\json', JSON.stringify(data), () => {
            console.log('note successful')});
            res.json(savedNote);
    })
}
