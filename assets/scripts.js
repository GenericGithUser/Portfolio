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

//Description Viewer
let showdescriptionBtn = document.querySelector(".showDescriptionBtn");
let hideBtn = document.querySelector(".closeBtn");
let description = document.querySelector(".description");


function show(){
    description.classList.remove("hide");
    showdescriptionBtn.classList.toggle("hide");
    hideBtn.classList.remove("hide");

}
function hide(){
    description.classList.toggle("hide");
    showdescriptionBtn.classList.remove("hide");
    hideBtn.classList.toggle("hide");
    
}
//You didn't think this through retard
let imgalShow = document.querySelector(".imgals");
let imgalClose = document.querySelector(".imgalc");
let imgalDesc = document.querySelector(".imgald");


function show1(){
    imgalDesc.classList.remove("hide");
    imgalShow.classList.toggle("hide");
    imgalClose.classList.remove("hide");

}
function hide1(){
    imgalDesc.classList.toggle("hide");
    imgalShow.classList.remove("hide");
    imgalClose.classList.toggle("hide");
    
}
//You didn't think this through retard
let buffShow = document.querySelector(".buffs");
let buffClose = document.querySelector(".buffc");
let buffDesc= document.querySelector(".buffd");


function show2(){
    buffDesc.classList.remove("hide");
    buffShow.classList.toggle("hide");
    buffClose.classList.remove("hide");

}
function hide2(){
    buffDesc.classList.toggle("hide");
    buffShow.classList.remove("hide");
    buffClose.classList.toggle("hide");
}
//You didn't think this through retard
let lottoShow = document.querySelector(".lottos");
let lottoClose = document.querySelector(".lottoc");
let lottoDesc= document.querySelector(".lottod");


function show3(){
    lottoDesc.classList.remove("hide");
   lottoShow.classList.toggle("hide");
    lottoClose.classList.remove("hide");

}
function hide3(){
    lottoDesc.classList.toggle("hide");
    lottoShow.classList.remove("hide");
    lottoClose.classList.toggle("hide");
}
let gradeShow = document.querySelector(".grades");
let gradeClose = document.querySelector(".gradec");
let gradeDesc= document.querySelector(".graded");


function show4(){
    gradeDesc.classList.remove("hide");
    gradeShow.classList.toggle("hide");
    gradeClose.classList.remove("hide");

}
function hide4(){
    gradeDesc.classList.toggle("hide");
    gradeShow.classList.remove("hide");
    gradeClose.classList.toggle("hide");
}
let engShow = document.querySelector(".engs");
let engClose = document.querySelector(".engc");
let engDesc= document.querySelector(".engd");


function show5(){
    engDesc.classList.remove("hide");
    engShow.classList.toggle("hide");
    engClose.classList.remove("hide");

}
function hide5(){
    engDesc.classList.toggle("hide");
    engShow.classList.remove("hide");
    engClose.classList.toggle("hide");
}
let mcqShow = document.querySelector(".mcqs");
let mcqClose = document.querySelector(".mcqc");
let mcqDesc= document.querySelector(".mcqd");


function show6(){
    mcqDesc.classList.remove("hide");
    mcqShow.classList.toggle("hide");
    mcqClose.classList.remove("hide");

}
function hide6(){
    mcqDesc.classList.toggle("hide");
    mcqShow.classList.remove("hide");
    mcqClose.classList.toggle("hide");
}
//You didn't think this through retard
let bulbShow = document.querySelector(".bulbs");
let bulbClose = document.querySelector(".bulbc");
let bulbDesc= document.querySelector(".bulbd");


function show41(){
    bulbDesc.classList.remove("hide");
    bulbShow.classList.toggle("hide");
    bulbClose.classList.remove("hide");

}
function hide41(){
    bulbDesc.classList.toggle("hide");
    bulbShow.classList.remove("hide");
    bulbClose.classList.toggle("hide");
}

function onTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}