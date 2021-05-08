let navToggle   =   document.querySelector('.nav-toggle-btn');
let navContent  =   document.querySelector('.nav-content');
let header      =   document.querySelector('header');
let navLinks    =   document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navContent.classList.toggle('nav-content-show');
    navToggle.classList.toggle('nav-toggle-close');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});


function scrollToView(element, elemToScroll) {
    let scrollElem = document.querySelector(elemToScroll);
    let scrollCtrls = document.querySelector(element);

    scrollCtrls.addEventListener('click', () => {
        scrollElem.scrollIntoView();
    });
}

scrollToView('.to-home', 'body');
scrollToView('.to-features', '#features');
scrollToView('.to-team', '#teams');
scrollToView('.to-sign-in', '#email');