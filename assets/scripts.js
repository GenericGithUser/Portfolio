// Scrolling Navbar
let nav = document.querySelector(".navigation");
window.addEventListener("scroll", function(){
    nav.classList.toggle("sticky", window.scrollY > 2);
});

//Scroll Blur for Banner
let banner = document.querySelector(".banner");
window.addEventListener("scroll", function(){
    banner.classList.toggle("bannerBlur", window.scrollY > 300);
})
