// Can I try to fetch multiple images?
// Can I try to fetch text?
const myImages = ["DarkWoodMeme.jpg", "LostDogStaring.png", "PhasmaphobiaScreenshot.jpg"]

async function getImages() {
    /*
        This function is used to fetch images using a list of image file names
    */
    // Clear the current displayed images
    clearImages();

    // Fetch every image from the list
    for (let imgName of myImages) {
        // console.log(`Fetching image "${imgName}"`);
        const res = await fetch(`../assets/${imgName}`);
        // console.log(res);
        const data = await res.blob();
        createImage(URL.createObjectURL(data));
        // console.log(data);
        // console.log("\n\n")
    }
}

function clearImages() {
    /*
        This function is used to remove all the image elements from the body
    */    
    const body = document.querySelector("body");
    let images = body.querySelectorAll("img");
    images.forEach(image => image.remove());
}

function createImage(imgSrc, altText = "New Image", container = "imgContainer") {
    /*
        This function is used to create new img nodes and append them to a container
    */
    let newImage = document.createElement("img");
    newImage.src = imgSrc;
    newImage.alt = altText;
    newImage.style = "display: block; max-height: 200px"
    document.querySelector(`#${container}`).appendChild(newImage);
}

async function getText() {
    /*
        This function is used to fetch text and edit the textContainer innerHTML
    */
    const res = await fetch("../assets/smallQuote.txt");
    document.querySelector("#textContainer").innerHTML = await res.text();
}


getText()
.catch(err => {
    console.log("getText() error:");
    console.error(err);
});
getImages()
    .catch(err => {
        console.log("getImages() error:");
        console.error(err);
    });