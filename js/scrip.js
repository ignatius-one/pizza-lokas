document.getElementById('changes-icon').addEventListener('click', () => {
    document.getElementById('menu-r').classList.toggle('show-menu')
    document.getElementById('changes-icon').classList.toggle('bar-x')
})

// hidden menu when you scroll down 
let position = window.pageYOffset;
// create var 
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
// hidden menu when you scroll down 


// function top
window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
    document.querySelector('.btn-top-container').classList.add('show-top')
    } else {document.querySelector('.btn-top-container').classList.remove('show-top')}
}
document.querySelector('.btn-top-container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior:'smooth',
    })
})
