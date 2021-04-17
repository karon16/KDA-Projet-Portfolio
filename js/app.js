const navMenu = document.getElementById('navigation');
window.onscroll = function(){
    navMenu.classList.add('menu--shadow');
}



const portfolioCard = document.getElementById('hidden-card');
const portfolioBtn = document.getElementById('portfolio-btn');
let btnChange = document.querySelector('.btn--changeable')

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
}
navSlide();


const faders = document.querySelectorAll('.fadeIn');
const links = document.querySelectorAll('.nav-link')

const appearOptions = {
    root : null,
    threshold :0,
    rootMargin : "50px"
};

const appearOnScroll = new IntersectionObserver
(function(
    entries, 
    appearOnScroll
    ){
        entries.forEach(entry =>{
            if(!entry.isIntersecting){
                return;
            }else{
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
                // console.log(entry.target);
            }
        });

    }, appearOptions);

faders.forEach(fader =>{
    appearOnScroll.observe(fader);
})
;
