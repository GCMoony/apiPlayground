const url_api = "https://api.wheretheiss.at/v1/satellites/25544";
async function  getISS() {
    const res = await fetch(url_api);
    const data = await res.json();
    // console.log(data);
    const {latitude, longitude} = data;
    // console.log(latitude, longitude);
    document.querySelector("#lat").textContent = latitude;
    document.querySelector("#lon").textContent = longitude;

    //map = L.map('map').setView([latitude, longitude], .5);
    map.panTo([latitude, longitude])

     if(!marker) {
        marker = L.marker([latitude, longitude], {icon: micon}).addTo(map);
    }
    else {
        marker.icon = L.IconDefault;
        marker = L.marker([latitude, longitude], {icon: micon}).addTo(map);
    }

}

let micon = L.icon({
    iconUrl: "./LostDogStaring.png",
    iconSize: [90, 150],
    iconAnchor: [90, 150],
})

let map = L.map('map').setView([50, 1], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker;
getISS();

let time = 13;
setInterval(() => {
    if(time == 0) {
        time = 13
        getISS();
    }
    document.querySelector("#timer").innerText = time;
    time--;
}, 1000);