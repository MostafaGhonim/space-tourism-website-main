let lis = document.querySelectorAll('ul li')
let nameProject = document.querySelector('.nameProject');
let infoProject = document.querySelector('.infoProject');
let picProcject = document.querySelector('.picProject')


lis.forEach((e) => {
    e.addEventListener('click', function () {
        let current = document.getElementsByClassName('choice2');
        current[0].className = ""
        this.className += " choice2"
    })
})


fetch('./data.json').then((e) => {
    let data = e.json()
    return data
}).then((e) => {
    return e.technology
}).then((data) => {
    lis.forEach((numbers) => {
        numbers.addEventListener(('click'), function (e) {
            for (let i = 0; i < lis.length; i++){
                if (e.target.id === data[i]["name"]) {
                    nameProject.innerHTML = data[i]["name"];
                    infoProject.innerHTML = data[i]["description"]
                    if (window.innerWidth < 991) {
                        picProcject.setAttribute('src', data[i]["images"].landscape)
                    } else {
                        picProcject.setAttribute('src', data[i]["images"].portrait)
                    }
                        
                }
            }
        })
    })
})

