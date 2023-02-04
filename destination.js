let plants = document.querySelectorAll('.btn')
let plantPhoto = document.querySelector('.planetPhoto')
let plantName = document.querySelector('.plantName')
let descraption = document.querySelector('.descraptionPlant')
let Km = document.querySelector('.Km')
let timeTravel = document.querySelector('.Est')


plants.forEach((e) => {
    e.addEventListener('click', function () {
        let current = document.getElementsByClassName('choice');
        current[0].className = ""
        this.className += " choice";    
    })
})

fetch('./data.json').then((e) => {
    let data = e.json()
    return data;
}).then((e) => {
    return e.destinations;
}).then((InfoPlants) => {
    plants.forEach((btn) => {
        btn.addEventListener('click', function (e) {
            for (let i = 0; i < InfoPlants.length; i++){
                if (e.target.textContent === (InfoPlants[i]["name"]).toUpperCase()) {
                    plantPhoto.setAttribute('src', InfoPlants[i]["images"]["png"]);
                        plantName.innerHTML = (InfoPlants[i]["name"]).toUpperCase()
                        descraption.innerHTML = InfoPlants[i]["description"];
                        Km.innerHTML = InfoPlants[i]["distance"];
                        timeTravel.innerHTML = InfoPlants[i]["travel"]
                }
            }
        })
    })
})