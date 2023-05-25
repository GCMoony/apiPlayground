// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
console.log("Let's fetch something locally")

fetch("../assets/DarkWoodMeme.jpg")
    // We got a response, let's look at it
    .then(response => {
        console.log(`Response:`);
        // 200 if we got something we're looking for
        // 404 if we couldn't find it
        console.log(response);
        return response.blob();
    })
    // Let's look at the data from the response blob
    .then(data => {
        console.log("Data:");
        console.log(data);
        document.getElementById("fetchPhoto").setAttribute("src", URL.createObjectURL(data))
        document.getElementById("fetchPhoto").alt = "DarkWood Meme";
    })
    // This can be used for catching DOM errors, i.e. misspelled element IDs
    .catch(err => {
        console.log("Error:")
        console.error(err);
    })