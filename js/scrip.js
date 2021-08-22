document.getElementById('changes-icon').addEventListener('click', () => {
    document.getElementById('menu-r').classList.toggle('show-menu')
    document.getElementById('changes-icon').classList.toggle('bar-x')
})

let position = window.pageYOffset;
let nav = document.getElementById('nav');

window.addEventListener('scroll', function () {
    adress = this.window.pageYOffset
    if (position >= adress) {
        nav.style.top = '0'
    } else {
        nav.style.top = '-5em'
    }
    position = adress
})
