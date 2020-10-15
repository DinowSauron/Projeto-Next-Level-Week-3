const map = L.map('mapid').setView([-22.8745251,-43.4653333], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [38,48],
    iconAnchor: [19,48]
})

let marker;
map.on('click', addMarker);
function addMarker(event){
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    
    marker && map.removeLayer(marker); /* se marker existir, executa a linha */

    marker = L.marker([lat,lng], { icon }).addTo(map)
}


/* campo de fotos */

function addPhotoField(){
    const container = document.querySelector('#images');
    const fieldsClone = document.querySelectorAll('.new-upload');
    
    const newField = fieldsClone[fieldsClone.length - 1].cloneNode(true);
    const inputField = newField.children[0];

    if(inputField.value == ""){
        return;
    }

    inputField.value = "";
    container.appendChild(newField);

}

function deletePhotoField(event){
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length <= 1){
        span.parentNode.children[0].value = "";
        span.parentNode.children[0].focus();
        return;
    }

    span.parentNode.remove();
}

function toggleSelect(event){
    const buttons = document.querySelectorAll(".button-select button");
    buttons.forEach(removeClass);
    function removeClass(button){
        button.classList.remove("active");
    }

    event.currentTarget.classList.add("active");
    const hiddenInput = document.querySelector("#open_on_weekends");

    hiddenInput.value = event.currentTarget.dataset.value;

    /* minha formula apesar de funcionar, se houver 3 ou mais botões ela já não serve! */
    // if(buttons[0].className == "active") 
    // hiddenInput.value = 1;
    // else 
    // hiddenInput.value = 2;
}