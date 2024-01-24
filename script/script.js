let i=0;
let btnRight=document.querySelector("#right");
let btnLeft=document.querySelector("#left");
let carousel=document.querySelector(".inline-flex .flex")
let box=document.querySelector(".flex .card");
let boxWidth=box.clientWidth;

let buttonLeft=document.getElementsByTagName("button")[0];
let buttonRight=document.getElementsByTagName("button")[0];

btnLeft.addEventListener("click", (e)=>{
    if(i===0){
        carousel.style=`transform: translateX(${0})`;
    }
    else{
        carousel.style=`transform: translateX(${i+=300}px); transition: all linear .3s`;
    }
})
btnRight.addEventListener("click", ()=>{
    if(i===-600){
        carousel.style=`transform: translateX(${-600}px)`;
    }
    else{
        carousel.style=`transform: translateX(${i-=300}px); transition: all linear .3s`;
    }
})