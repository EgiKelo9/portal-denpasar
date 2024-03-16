// Navbar color changing
document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-container')
    if(window.scrollY > 0){
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// News slider
let slideIndex = 1;
show(slideIndex);
function plus(n) {
    show(slideIndex += n);
}
function current(n) {
    show(slideIndex = n);
}
function show(n) {
    const pages = document.getElementsByClassName("content-wrapper");
    const dots = document.getElementsByClassName("dot");
    if(n > pages.length) slideIndex = 1;
    if(n < 1) slideIndex = pages.length;
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
    for(let i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "#cccccc";
    }
    pages[slideIndex-1].style.transition = "0.2s ease-in-out";
    dots[slideIndex-1].style.transition = "0.2s ease-in-out";
    pages[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].style.backgroundColor = "#888888";
}

// Category switch
let Index = 1;
pop(Index);
function pop(n) {
    const selected = document.getElementsByClassName("h1");
    if(n == 1) {
        selected[Index-1].style.backgroundColor = "#777777";
        selected[Index-1].style.color = "#eaeaea";
        selected[Index-1].style.transition = "0.2s ease-in-out";
        selected[Index].style.backgroundColor = "transparent";
        selected[Index].style.color = "#333333";
        selected[Index].style.transition = "0.2s ease-in-out";
    } else {
        selected[Index-1].style.backgroundColor = "transparent";
        selected[Index-1].style.color = "#333333";
        selected[Index-1].style.transition = "0.2s ease-in-out";
        selected[Index].style.backgroundColor = "#777777";
        selected[Index].style.color = "#eaeaea";
        selected[Index].style.transition = "0.2s ease-in-out";
    }
}