const express = require('express');
const app = express();

app.listen(3000, () => console.log("Listening on port 3000"));

// Now that we're listening, what do I want to listen for?

// 1. Serve web pages (from the 'public' folder)
    // Serve index.html
app.use(express.static('public'))