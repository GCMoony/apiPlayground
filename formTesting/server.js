// Server initialization
const express = require("express");
const app = express();
app.listen(3000, () => {console.log("Listening on 3000")});

// Database initialization
const Datastore = require('nedb');
const database = new Datastore('data.db');
database.loadDatabase();

// Server configuration
app.use(express.static("public"));
app.use(express.json( {
    limit: '1mb',
}));


/**
 * ========
 * Routes
 * ========
 */

app.post("/api", (req, res) => {
    console.log("Route 'API' got a request");
    
    // Inserting a new user to the database
    database.insert(req.body);

    // res.json({
    //     status: `Hi ${req.body.first}, your account has been created!`
    // })
    
    
});