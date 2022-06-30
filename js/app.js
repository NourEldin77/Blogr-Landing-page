const btn_nav= document.querySelector('.btn__navbar');
const nav = document.querySelector(".header__navbar");
btn_nav.addEventListener('click',()=>{
    if(nav.style.display === "none"){
        nav.style.display === "flex";
    }
    else{
        nav.style.display === "none"
        console.log(nav)
    }
})