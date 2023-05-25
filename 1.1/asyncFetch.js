// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
console.log("Let's fetch something locally")


async function catchPhoto(defaultPhoto = "../assets/DarkWoodMeme.jpg") {
    // Let's attempt to fetch this image
    const res = await fetch(`${defaultPhoto}`);
    console.log("Response:")
    console.log(res);

    // Let's turn this respnose into data
    const blob = await res.blob();
    console.log("Data:")
    console.log(blob);

    // Let's put this data into our page
    const photoElem = document.getElementById("fetchPhoto");
    // const photoElem = document.getElementById("ftchPhoto");
    photoElem.src = URL.createObjectURL(blob);

    // Hopefully there's a good photo filename...
    photoElem.alt = defaultPhoto.replace(/..\/assets\//, "").replace(/.jpg/, "");
}

catchPhoto()
    .then(res => {
        console.log("Got a response!");
        //console.log(res) // Will not provide anything;
    })
    // In case we couldn't find something in the DOM
    .catch(err => {
        console.log("Error: ")
        console.error(err);
    });
