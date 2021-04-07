const arrow = document.querySelector(".to-top");

window.addEventListener("scroll", ()=>{
    if (window.pageYOffset > 100 ){
        arrow.classList.add("active");
    } else {
        arrow.classList.remove("active");
    }
});