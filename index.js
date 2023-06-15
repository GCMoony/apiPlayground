// const { create } = require("domain");
// const { json } = require("stream/consumers");

async function getStuff() {
    clearSearch();
    const res = await fetch("https://newsapi.org/v2/everything?q=%223d%20printing%22&apiKey=[API_KEY]")
    const jsonData = await res.json();
    let cardHolder = document.getElementById("card-holder");
    cardHolder.innerHTML = "";
    jsonData.articles.map(article => {
        cardHolder.appendChild(createStory(article.title, article.author, article.publishedAt, article.url, article.description, article.urlToImage));
    })
    // console.log(jsonData.articles.map(article => console.log(article)));
    // /*document.querySelector("#query").innerHTML = () => {
    //     jsonData.articles[0].title
    // };*/
}

function clearSearch() {
    let cardHolder = document.getElementById("card-holder");
    cardHolder.innerHTML = "";
}

function sendSearch() {
    let search = document.getElementById("search");
    // console.log(search.value);
    searchQ(search.value);
}

let btn = document.getElementById("submit-button");
btn.addEventListener("click", sendSearch);

async function searchQ(query) {
    const res = await fetch("https://newsapi.org/v2/everything?q=\"" + query + "\"&apiKey=[API_KEY]");
    const jsonData = await res.json();
    let cardHolder = document.getElementById("card-holder");
    cardHolder.innerHTML = "";
    jsonData.articles.map(article => {
        cardHolder.appendChild(createStory(article.title, article.author, article.publishedAt, article.url, article.description, article.urlToImage));
    })
}

function createStory(title, author, date, url, preview, image) {
    let card = document.createElement("div");
    card.classList.add("preview");

    let cardLink = document.createElement("a");
    cardLink.href = url;
    cardLink.target = "_blank";

    let cardTitle = document.createElement("h2");
    cardTitle.innerHTML = title;
    cardLink.appendChild(cardTitle);

    let cardPreview = document.createElement("p");
    cardPreview.innerHTML = preview;

    let cardImg = document.createElement("img");
    cardImg.src = image;
    cardImg.loading = "lazy"

    card.appendChild(cardImg);
    card.appendChild(cardLink);
    card.appendChild(cardPreview);

    
    return card;
}   



getStuff();

// document.querySelector("#submit-button").addEventListener(onclick, () => {getStuff()});


async function tryStuff() {
    clearSearch();
    const res = await fetch("https://newsapi.org/v2/everything?q=%223d%20printing%22&apiKey=[API_KEY]")
    const jsonData = await res.json();
    // let cardHolder = document.getElementById("card-holder");
    // cardHolder.innerHTML = "";
    // jsonData.articles.map(article => {
    //     cardHolder.appendChild(createStory(article.title, article.author, article.publishedAt, article.url, article.description));
    // })
    console.log(jsonData.articles.map(article => console.log(article)));
    /*document.querySelector("#query").innerHTML = () => {
        jsonData.articles[0].title
    };*/
}