let iconClick = document.querySelector(".fa-solid");
let nav = document.querySelector('nav');
iconClick.addEventListener("click",()=>{
    if(iconClick.classList.contains("fa-bars")){
        iconClick.classList.remove("fa-bars");
        iconClick.classList.add("fa-xmark")
        nav.classList.add("active")
    }
    else{
        iconClick.classList.add("fa-bars");
        iconClick.classList.remove("fa-xmark")
        nav.classList.remove("active")

    }
})
console.log(iconClick)