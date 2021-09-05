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

// faceboock api 
  var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "100955175666032");
      chatbox.setAttribute("attribution", "biz_inbox");

      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v11.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
