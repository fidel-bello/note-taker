//module
const fs = require('fs');
const data = require('../db/db.json')

module.exports = function (app) {
    let postNote = data.length;
    app.get('/api/notes', function (req, res){
        res.json(data)
    })
}
