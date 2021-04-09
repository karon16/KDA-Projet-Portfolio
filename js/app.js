const navMenu = document.getElementById('navigation');
window.onscroll = function(){
    navMenu.classList.add('menu--shadow');
}



const portfolioCard = document.getElementById('hidden-card');
const portfolioBtn = document.getElementById('portfolio-btn');
let btnChange = document.querySelector('.btn--changeable')

// console.log(portfolioCard);
portfolioBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    portfolioCard.classList.toggle('hidden-card');
        if (portfolioCard.classList.contains('hidden-card')) {
            btnChange.innerHTML = "VOIR PLUS";
        }else{
            btnChange.innerHTML = "VOIR MOINS";
        }
})


const navSlide = function(){
    const burger = document.querySelector('.burger');
    const navigationLinkBox = document.querySelector('.navigation__link-box');
    const navLinks = document.querySelectorAll('.nav-link');
    const mainPage = document.querySelector('.main-page .header-background');

    burger.addEventListener('click', () =>{
        navigationLinkBox.classList.toggle('nav-active');
        mainPage.classList.toggle('main-page--blacked');
    })
    
    // console.log(navLinks);
    navLinks.forEach((link) => {
        link.addEventListener('click', ()=>{
        navigationLinkBox.classList.remove('nav-active');
        mainPage.classList.remove('main-page--blacked');

        })

    });
    // navLinks.addEventListener('click', ()=>{
    //     navigationLinkBox.classList.remove('nav-active');
    // })

}

navSlide();

