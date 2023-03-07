let dots = document.querySelectorAll('.dot');
let titlePosation = document.querySelector('.jobTitle');
let namePerson = document.querySelector('.name');
let bio = document.querySelector('.Hint');
let photoCrew = document.querySelector('.crewPhoto')



dots.forEach((e) => {
    e.addEventListener('click',function () {
        let current = document.getElementsByClassName('click');
        current[0].className = current[0].className.replace(" click", "");
        this.className += " click"
    })
})

fetch('./data.json').then((e) => {
    let data = e.json();
    return data;
}).then((e) => {
    return e.crew
}).then((crewInformation) => {
    dots.forEach((e) => {
        e.addEventListener("click", function (e) {
            for (let i = 0; i < crewInformation.length; i++) {
                if (e.target.id === `dot${i}`) {
                    photoCrew.style.width = '350px'
                    titlePosation.innerHTML = crewInformation[i]["role"];
                    namePerson.innerHTML = crewInformation[i]["name"];
                    bio.innerHTML = crewInformation[i]["bio"];
                    photoCrew.setAttribute('src', crewInformation[i]["images"]["png"]);
                    photoCrew.setAttribute('alt', crewInformation[i]["name"]);
                }
            }
        })
    })
})
