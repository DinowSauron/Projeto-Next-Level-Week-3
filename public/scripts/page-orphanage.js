const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    keyboard: false,
    zoomControl: false
}

const lat = document.querySelector("span[data-lat]").dataset.lat;
const lng = document.querySelector("span[data-lng]").dataset.lng;

const map = L.map('mapid', options).setView([lat, lng], 15);

// Leaflet Map

//TitleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

//Icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

L.marker([lat, lng], { icon }).addTo(map)


/* image gallery */

function selectImage(event){
    const button = event.currentTarget;
    const buttons = document.querySelectorAll(".images button"); /* como no css! */

    buttons.forEach(removeClass);
    function removeClass(button){
        button.classList.remove("active");
    }
    button.classList.add("active");

    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img")
    imageContainer.src = image.src;
    // Minha formula...
    // for(var x = 0; x < buttons.length;x++){
    //     if(buttons[x].className === "active"){
    //         buttons[x].className = "";
    //     }
    // }
    // button.className = "active";
    
}

function cleanFields(){
    const nameInput = document.querySelector(".new-comment #name");
    const textInput = document.querySelector(".new-comment #text");

    nameInput.value = '';
    textInput.value = '';
}

Handlebars.registerHelper('notNull', function(value1,value2, options) {
    if(value1)
    return options.inverse(this);
});