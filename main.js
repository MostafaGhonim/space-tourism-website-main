let links = document.querySelectorAll('li')

links.forEach((e) => {
    e.addEventListener('click', function () {
        let current = document.getElementsByClassName('active');
        current[0].className = className = ""
        this.className += "active";    
    })
})
