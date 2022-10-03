
//Hamburger icon
const newslider = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active")

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        burger.classList.toggle("toggle");
    });

}

newslider();
// Auto image slider
let sliderIndex = 0;
function showSlider() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    // let dots = document.getElementsByClassName("dot");
console.log(slides);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    sliderIndex++;
    if (sliderIndex > slides.length) {
        sliderIndex = 1
    }
 

    slides[sliderIndex - 1].style.display = "block";

    setTimeout(showSlider, 10000);
    
}
showSlider();
