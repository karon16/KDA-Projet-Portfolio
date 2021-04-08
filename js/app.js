const navMenu = document.getElementById('navigation');
window.onscroll = function(){
    navMenu.classList.add('menu--shadow');
}



const portfolioCard = document.getElementById('hidden-card');
const portfolioBtn = document.getElementById('portfolio-btn');
const btnChange = document.querySelector('.btn--changeable')

portfolioBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    portfolioCard.classList.toggle('hidden-card');
    btnChange.classList.add('change');
    btnChange.innerHTML = "VOIR MOINS";
    console.log("b")
})


const navSlide = function(){
    const burger = document.querySelector('.burger');
    const navigationLinkBox = document.querySelector('.navigation__link-box');
    const navLinks = document.querySelectorAll('.navigation__link-box .nav-link');
    const mainPage = document.querySelector('.main-page .header-background');

    burger.addEventListener('click', () =>{
        navigationLinkBox.classList.toggle('nav-active');
        mainPage.classList.toggle('main-page--blacked')
    })
}

navSlide();

