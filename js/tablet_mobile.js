// let hamburgericon=document.createElement("div");
// hamburgericon.innerHTML=`<ul class="menu__mobile"><li><img src="assets/menu.svg" alt="mobile-menu"></li></ul>`
// document.getElementById("header").append(hamburgericon);

import hamburgericons from "../assets/menu.svg"
const hamburger=()=>{
let hamburgericon=document.createElement("div");
hamburgericon.setAttribute("class","menu__mobile")
hamburgericon.innerHTML=`<div class="icons"><img class="iconsimage" src=${hamburgericons} alt="mobile-menu"></div>`
document.getElementsByClassName("header")[0].append(hamburgericon);


let hamburger_menu=document.createElement("nav");
hamburger_menu.innerHTML=hamburger_menu.innerHTML+document.querySelector(".header_nav_up").innerHTML;
hamburger_menu.setAttribute("class","header_nav_up")
document.body.append(hamburger_menu);
document.querySelector(".header_nav_up").remove();
document.getElementsByClassName("header_li")[document.getElementsByClassName("header_li").length-1].remove();

document.getElementsByClassName("header_menu_lap")[0].innerHTML=document.getElementsByClassName("header_menu_lap")[0].innerHTML+'<div class="cross"><img class="cross_image" width="26" height="26" src="https://img.icons8.com/metro/26/1A1A1A/delete-sign.png" alt="delete-sign"/></div>'


document.getElementsByClassName("iconsimage")[0].addEventListener("click",()=>{
    document.querySelector(".header_nav_up").style.top="0";
})

document.getElementsByClassName("cross_image")[0].addEventListener("click",(event)=>{   
    event.stopPropagation() 
    document.querySelector(".header_nav_up").style.top="-100%";
    console.log("jsjs");
})
}


if(screen.width>=100 && screen.width<1025){
    document.getElementsByClassName("trending_upside")[0].style.flexDirection="column";
    document.getElementsByClassName("trending_downside")[0].style.flexDirection="column";

    document.getElementsByClassName("trending_downside_rightside_vertical")[0].remove();
    document.getElementsByClassName("trending_downside_rightside_horizontal")[0].remove();
    document.getElementsByClassName("trending_upside_rightside_vertical")[0].remove();
    document.getElementsByClassName("trending_upside_rightside_horizontal")[0].remove();
    document.getElementsByClassName("discover")[0].remove();
    document.getElementById("footerh3").setAttribute("data-aos","fade-down");

    // for(let i=0;i<document.getElementsByClassName("header_li_opt").length-1;i++){
    //     document.getElementsByClassName("header_li_opt")[i].setAttribute("data-aos","fade-up");
    // }
    hamburger();
    
}


