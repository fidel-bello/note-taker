//node modules
const path = require('path');
 
//get requet for html
module.exports = function(app) {
    app.get('/notes', function(req, res){res.sendFile(path.join(__dirname, '../public/notes.html'))});

app.get('*', function(req,res){res.sendFile(path.join(__dirname, '../public/indec.html'))});
};