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

let boxTitleNum;


function changeTxt(){
    txtChange = document.querySelector('.boxTitle'+ CSS.escape(boxTitleNum));
    if(txtChange.textContent == "Show Description"){
        txtChange.textContent = "Hide Description";
    } else{
        txtChange.textContent = "Show Description";
    }
 
}



function onTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}