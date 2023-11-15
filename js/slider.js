let popularfood_catalogue = document.getElementById("popularfood_catalogue");

let cards=document.getElementsByClassName("popular-foods_card");
let popularfood_catalogue_style  = window.getComputedStyle(popularfood_catalogue);
// this return the value of property of any type(i.e style and so on) of element in string form
// getComputedStyle helps to get the value of css of any element which apply through external

// through simple vanila we only get inline property value

let item_size=0;
let margin_size=0;

let counter=0;
if(screen.width>1024){
    // for laptops
    item_size=document.getElementById("popularfood_catalogue").getAttribute("desktop-limit");
    popularfood_catalogue.style.gap="70px";
    margin_size=parseInt(popularfood_catalogue.style.gap);
}
if(screen.width>=768 && screen.width<=1024){
    item_size=document.getElementById("popularfood_catalogue").getAttribute("tablet-limit");
    popularfood_catalogue.style.gap="103px";
    margin_size=parseInt(popularfood_catalogue.style.gap);
    document.getElementsByClassName("about-us_leftside_learn_more")[0].remove();
}

if(screen.width>=100 && screen.width<768){
    popularfood_catalogue.style.gap="200px";
    margin_size=parseInt(popularfood_catalogue.style.gap);
    item_size=document.getElementById("popularfood_catalogue").getAttribute("mobile-limit");
}

// if(screen.width>=1024){
//     item_size=document.getElementById("popularfood_catalogue").getAttribute("desktop-limit");
//     popularfood_catalogue.style.gap="75px";
//     margin_size=parseInt(popularfood_catalogue.style.gap);
//     console.log(margin_size)
// }
let popularfood_catalogue_width=document.getElementById("popularfood_catalogue").clientWidth;

for(let i=0;i<cards.length;i++){
    
    // clientwidth gives the width in the value form live

    console.log(popularfood_catalogue_width);
    // if(screen.width>=300 && screen.width<=580){
        // cards[i].style.minWidth=Math.floor(((popularfood_catalogue_width-(margin_size*(item_size-1)))/item_size)-17) + "px";
        // document.getElementsByClassName("fa-angle-left")[0].style.top="64%";
        // document.getElementsByClassName("fa-angle-right")[0].style.top="64%";
    // }
    // else{
        cards[i].style.minWidth=Math.floor((popularfood_catalogue_width-(margin_size*(item_size-1)))/item_size) + "px";
    // }
    console.log(cards[i].style.minWidth);
}
// infinite scroll
// let cards1=[...cards];
// let newcard=0;
// const prev_infinite_scroll=()=>{
//     newcard=document.createElement("article");
//     newcard.setAttribute("draggable","false");
//     newcard.setAttribute("class","popular-foods_card");
//     newcard.setAttribute("style","min-width:333px");

//     newcard.innerHTML=document.getElementsByClassName("popular-foods_card")[cards.length-1].innerHTML;
//     document.getElementById("popularfood_catalogue").prepend(newcard);
//     document.getElementsByClassName("popular-foods_card")[cards.length-1].remove();
//     console.log(document.getElementsByClassName("popular-foods_card"));
//     // document.getElementsByClassName("popular-foods_card").
// }

// const next_infinite_scroll=()=>{
//     newcard=document.createElement("article");
//     newcard.setAttribute("draggable","false");
//     newcard.setAttribute("class","popular-foods_card");
//     newcard.setAttribute("style","min-width:333px");

//     newcard.innerHTML=document.getElementsByClassName("popular-foods_card")[0].innerHTML;
//     console.log(newcard);
//     document.getElementById("popularfood_catalogue").append(newcard);
//     document.getElementsByClassName("popular-foods_card")[0].remove();
//     console.log(document.getElementsByClassName("popular-foods_card"));
// }
// dragging 

let isDragging=false;

let scrolled=0;
let clicked_point=0;

const startdrag=(e)=>{
    isDragging=true;
    if(screen.width>=100 && screen.width<768){
        console.log(clicked_point);
        popularfood_catalogue.addEventListener("touchmove",dragging);
        popularfood_catalogue.addEventListener("touchcancel",leavedrag);
        if(e.changedTouches!=undefined){
            clicked_point=e.changedTouches[0].screenX;
        }
    }
    else{
        popularfood_catalogue.addEventListener("mousemove",dragging);
        popularfood_catalogue.addEventListener("mouseleave",leavedrag);
        clicked_point=e.pageX;
    }
}

const dragging=(e)=>{
    
    if(!isDragging) return
    
    // e.pageX returns the coordinate point when mouse event occur
    
    // if(e.pageX-clicked_point<0){
    //     next_infinite_scroll();
    // }
    // else if(e.pageX-clicked_point>0){
    //     prev_infinite_scroll();
    // }
    if(screen.width>=100 && screen.width<768){
        let mobile_Scroll=0;
        if(e.changedTouches[0].screenX-clicked_point<0){
            popularfood_catalogue.scrollLeft=popularfood_catalogue.scrollLeft+(cards[0].offsetWidth+margin_size);
        }
        else if(e.changedTouches[0].screenX-clicked_point>0){
            popularfood_catalogue.scrollLeft=popularfood_catalogue.scrollLeft-(cards[0].offsetWidth+margin_size);
        }
    }
    else{
        popularfood_catalogue.scrollLeft=scrolled-(e.pageX-clicked_point);
    }

    popularfood_catalogue.classList.add("dragging");
    scrolled=popularfood_catalogue.scrollLeft;
}
const enddrag=()=>{
    popularfood_catalogue.classList.remove("dragging");
    isDragging=false;
    popularfood_catalogue.removeEventListener("touchmove",dragging);
    popularfood_catalogue.removeEventListener("touchcancel",leavedrag);
    
}
const leavedrag=()=>{
    popularfood_catalogue.scrollLeft=0;
    counter=0;
}
popularfood_catalogue.addEventListener("mousedown",startdrag);
popularfood_catalogue.addEventListener("mousemove",dragging);
popularfood_catalogue.addEventListener("mouseup",enddrag);

popularfood_catalogue.addEventListener("touchstart",startdrag);
// popularfood_catalogue.addEventListener("touchmove",dragging);
popularfood_catalogue.addEventListener("touchend",enddrag);


// arrow moving


const previous=()=>{
    popularfood_catalogue.addEventListener("mouseleave",leavedrag);
    popularfood_catalogue.addEventListener("touchleave",leavedrag);
    popularfood_catalogue.scrollLeft=popularfood_catalogue.scrollLeft-(cards[0].offsetWidth+margin_size);
    if(counter>0 && popularfood_catalogue.scrollLeft==popularfood_catalogue.scrollLeft-(cards[0].offsetWidth+margin_size)){
        counter=counter-1;
    }
    
}
let extra=0;
// counter<(cards.length-(item_size)) && 
const next=()=>{
    // next_infinite_scroll();
    popularfood_catalogue.addEventListener("mouseleave",leavedrag);
    popularfood_catalogue.addEventListener("touchleave",leavedrag);
    popularfood_catalogue.scrollLeft=popularfood_catalogue.scrollLeft+(cards[0].offsetWidth+margin_size);
    if(counter<((Math.round(cards.length/item_size)+extra)-1) && popularfood_catalogue.scrollLeft==popularfood_catalogue.scrollLeft+(cards[0].offsetWidth+margin_size)){
        counter=counter+1;
        console.log(counter);
    }
}

    document.getElementsByClassName("fa-angle-left")[0].addEventListener("click",previous);
    document.getElementsByClassName("fa-angle-right")[0].addEventListener("click",next);
    
    
    // infinity feature is remaining