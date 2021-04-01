const navMenu = document.getElementById('navigation');

window.onscroll = function(){
    navMenu.classList.add('menu--shadow');
    console.log(navMenu.classList);
}