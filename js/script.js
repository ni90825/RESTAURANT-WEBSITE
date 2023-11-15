import check from '../assets/check.svg'
import star from '../assets/star.svg'
import sushi_12 from '../assets/sushi-12.png'
import sushi_11 from '../assets/sushi-11.png'
import sushi_10 from '../assets/sushi-10.png'
import sushi_5  from '../assets/sushi-5.png'
import sushi_4  from '../assets/sushi-4.png'
import sushi_2  from '../assets/sushi-2.png'
import AOS from "aos";
import "aos/dist/aos.css";

// AOS:Small library to animate elements on your page as you scroll.
// https://michalsnik.github.io/aos/

// intializing AOS
AOS.init({
    duration: 1000,
    offset: 150,
    // offset means trigger the animation earlier or later than the designated time
});

// console.log(allImage);
const trendingSushis = [
    'Make Sushi',
    'Nigiri Sushi',
    'Oshizushi',
    'Temaki Sushi',
    'Uramaki Sushi',
    'Inari Sushi'
];

const trendingDrinks = [
    "Oruncha",
    "Ofukucha",
    "Sakura Tea",
    "Kombu-cha",
    "Aojiru",
    "Mugicha",
]

const cards = [
    {
        imgSrc: sushi_12,
        alt: "sushi-12",
        title: "Chezu Sushi",
        rating: "4.8",
        price: "$21.00"
    },
    {
        imgSrc: sushi_11,
        alt: "sushi-11",
        title: "Originale Sushi",
        rating: "4.8",
        price: "$21.00",
        active: true
    },
    {
        imgSrc: sushi_10,
        alt: "sushi-10",
        title: "Ramen Legendo",
        rating: "4.8",
        price: "$21.00"
    },
    {
        imgSrc: sushi_5,
        alt: "sushi-5",
        title: "Ramen Legendo",
        rating: "4.8",
        price: "$21.00"
    },
    {
        imgSrc: sushi_4,
        alt: "sushi-4",
        title: "Ramen Legendo",
        rating: "4.8",
        price: "$21.00"
    },
    {
        imgSrc: sushi_2,
        alt: "sushi-2",
        title: "Ramen Legendo",
        rating: "4.8",
        price: "$21.00"
    },
    
];
// ..\\assets\\${cards[i].imgSrc}.png
const popularfood_catalogue=document.getElementsByClassName("popularfood_catalogue")[0];
for(let i=0;i<cards.length;i++){
    popularfood_catalogue.innerHTML=popularfood_catalogue.innerHTML+`<article draggable="false" class="popular-foods_card"><img class="popular-foods_card-image" draggable="false" src=${cards[i].imgSrc} alt=${cards[i].alt}><h4 class="popular-foods_card__title" draggable="false">${cards[i].title}</h4><div class="popular-foods_card__detail"><div class="popular-foods_card__detailstar"><img src=${star} draggable="false"><span>${cards[i].rating}</span></div><p draggable="false">${cards[i].price}</p></div></article>`
}

const trending_upside_leftside_fourthsect=document.getElementsByClassName("trending_upside_leftside_fourthsect")[0];
for(let i=0;i<trendingSushis.length;i++){
    trending_upside_leftside_fourthsect.innerHTML=trending_upside_leftside_fourthsect.innerHTML + `<div class="trendsushi"><div class="checkbox"><img src=${check} class="checkbox_image"></div><p class="trendsushipara">${trendingSushis[i]}</p></div>`
}
const trending_downside_leftside_fourthsect=document.getElementsByClassName("trending_downside_leftside_fourthsect")[0];
for(let i=0;i<trendingDrinks.length;i++){
    trending_downside_leftside_fourthsect.innerHTML=trending_downside_leftside_fourthsect.innerHTML + `<div class="trendsushi"><div class="checkbox"><img src=${check} class="checkbox_image"></div><p class="trendsushipara">${trendingDrinks[i]}</p></div>`
}