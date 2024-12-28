
//Loading Screen Script
document.addEventListener("DOMContentLoaded", () =>{
    const loadingScreen = document.querySelector(".loadingScreen");
    const body = document.querySelector(".main");

    loadingScreen.classList.remove("hidden");
    

    setTimeout(()=>{
        body.classList.remove("hidden");
    }, 2300);
    setTimeout(() => {
        loadingScreen.classList.add("hidden");
        
    }, 3000);

});



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

//Student Directory Image Previewer
let images = [];
let i = 0;
let imgBox = document.querySelector(".workBoxPreview1");
images[0] = "../pages/studentDirectory/prev1StuD.jpeg";
images[1] = "../pages/studentDirectory/prev2StuD.jpeg";
images[2] = "../pages/studentDirectory/prev3StuD.jpeg";
images[3] = "../pages/studentDirectory/prev4StuD.jpeg";
images[4] = "../pages/studentDirectory/prev5StuD.jpeg";
images[5] = "../pages/studentDirectory/prev.jpeg"; 
function changeImg(){
    imgBox.src = images[i];
    if(i < images.length -1){
        i++
    } else {
        i = 0;
    }

    setTimeout("changeImg()",3000);
}
window.onload = changeImg;


//Change text of button for description

let boxTitleNum;


function changeTxt(){
    txtChange = document.querySelector('.boxTitle'+ CSS.escape(boxTitleNum));
    if(txtChange.textContent == "Show Description"){
        txtChange.textContent = "Hide Description";
    } else{
        txtChange.textContent = "Show Description";
    }
 
}

//Mobile NavBar Scripts
let navBar = document.querySelector('.navigation');

function expandDec() {
   navBar.style.width = '100%';
   document.querySelector('.summMenu').setAttribute("onclick", " decreaseDec()");
    
}

function decreaseDec(){
    navBar.style.width = '25%';
   document.querySelector('.summMenu').setAttribute("onclick", "expandDec()");
}

function closeMenuOnSelect(){
    document.querySelector('.mobileNav').removeAttribute('open');
    decreaseDec();
}

//Indicator for NavBar
window.addEventListener("DOMContentLoaded", () => {
    const marker = document.querySelectorAll('.marker');
    const links = document.querySelectorAll('.navigation > ul > li > a');

    window.addEventListener('scroll', (event) => {
        if(typeof(marker) != 'undefined' && marker != 'undefined' && links != 'undefined'){
            let scrollTop = window.scrollY;

            links.forEach((link, index)=> {
                link.classList.remove('active');
            });

            for(let i = marker.length-1; i>=0; i--){
                if (scrollTop > marker[i].offsetTop - 75){
                    links[i].classList.add('active');
                    break;
                }
            }
        }
    })
})


//Indicator for Mobile NavBar
window.addEventListener("DOMContentLoaded", () => {
    const marker = document.querySelectorAll('.marker');
    const links = document.querySelectorAll('.navigation > .mobileNav > .menuItems > a');

    window.addEventListener('scroll', (event) => {
        if(typeof(marker) != 'undefined' && marker != 'undefined' && links != 'undefined'){
            let scrollTop = window.scrollY;

            links.forEach((link, index)=> {
                link.classList.remove('active');
            });

            for(let i = marker.length-1; i>=0; i--){
                if (scrollTop > marker[i].offsetTop - 75){
                    links[i].classList.add('active');
                    break;
                }
            }
        }
    })
})

//Glide
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show')
        }
    })
})
const hideElements = document.querySelectorAll('.hide');
hideElements.forEach((element)=> observer.observe(element));



//Back to top
function onTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}