/* 
    On the server, we want to:
    - Host files
    - Save stuff to a database
    - Add authentication

*/

/*
    I setup the server (CommonJS) by:
    - Importing Express
    - Setting up an 'app' variable
    - Setting the app up to listen on a specific port
*/
const express = require('express');
const fs = require("node:fs/promises");
const Datastore = require('nedb');
const app = express();
app.listen(3000, () => {
    console.log("Listening on port 3k");
});

// Tell Express to serve content from the 'public' folder
app.use(express.static('public'))

/**
 * This is how you tell the app to use Express to read JSON request data
 */
app.use(express.json({
    limit: '1mb',
}));

// A variable to store client data
let saveData = [];

const database = new Datastore('database.db');
database.loadDatabase();
database.insert({
    name: 'poop',
    status: 'ok',
});



/**
 * This is how we will send data from the client to the server
 * using the POST method. We will POST to the route 'poop'
 */
app.post('/poop', (req, res) => {
    /**
     * 'req' will hold the information sent from the client
     * 'res' is what the client receives from the server
     */

    // Saving the data body from the client
    saveData.push(req.body);

    // Sending a JSON response back to the client
    res.json({
        status: "succ",
        latitude: req.body.lat,
        longitude: req.body.lon,
        time: req.body.currTime,
    });

    // Displaying the info received on the server
    console.log("\nGot the following from the client:\n", saveData, "\n");

    // Write the save data to a file
    // saveToFile();

    // Write the save data to the database
    database.insert({
        latitude: req.body.lat,
        longitude: req.body.lon,
        time: req.body.currTime,
    });
    
})

// Let's try saving the data to a file named "poop.txt"
async function saveToFile() {
    // Requiring the FileSystem (Promises)
    
    let fh;

    /**
     * - Open the file for appending, or create one if it doesn't exist
     * - Write the data as a JSON object
     * - Close the file after writing to it
     */
    try {
        fh = await fs.open("./poop.txt", 'a+');
        // fh.write(JSON.stringify(saveData[saveData.length - 1]) + "\n")
        fh.write(`${saveData[saveData.length - 1].currTime} \n`)
    } finally {
        await fh?.close();
    }
}