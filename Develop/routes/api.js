// node modules
const fs = require('fs');

//route
module.exports = function(app){

    //api get request
    app.get('./api/notes', (req, res) => {
        console.log('Getting notes');

        //read db.json file
     let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
     console.log('\nGET request - Returning notes data: ' + JSON.stringify(data));
   //send data to get request
     res.json(data);
    })
}
