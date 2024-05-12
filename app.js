var menuBtn = document.getElementById("menuBtn");
var menu = document.getElementById("menu");
var sideNav = document.getElementById("sideNav");

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000
});

sideNav.style.right = "-200px";

menuBtn.onclick = function(){
    if(sideNav.style.right == "-200px"){
        sideNav.style.right = "0";
        menuBtn.innerHTML = '<i class="fa-solid fa-square-xmark"></i>';
    }
    else{
        sideNav.style.right = "-200px";
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
}


