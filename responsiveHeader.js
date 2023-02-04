let linksPerant = document.querySelector('.links')
let body = document.body;
let icon = document.getElementsByClassName('icon')[0];

icon.onclick = function () {
    if (icon.getAttribute('src') === 'assets/shared/icon-hamburger.svg') {
        icon.setAttribute('src', 'assets/shared/icon-close.svg')
        body.style.setProperty('--show', '70%')
        setTimeout(() => {
            linksPerant.style.setProperty('--links', "block")
            linksPerant.style.setProperty('--opacti', "1")
        }, 170);
        
    } else {
        icon.setAttribute('src', 'assets/shared/icon-hamburger.svg')
        body.style.setProperty('--show', '0%')
        linksPerant.style.setProperty('--links',"none")
    }
}
window.onresize = function () {
    if (window.innerWidth > 520) {
        body.style.setProperty('--show', '0%')
        icon.setAttribute('src', 'assets/shared/icon-hamburger.svg')
        linksPerant.style.setProperty('--links',"none")
    }
}