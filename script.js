const menu = document.querySelector(".menu");
const button = document.querySelector(".menu-bar");

button.addEventListener("click", function() {
    menu.classList.toggle("show");
    console.log("Menu button clicked"); // Add this for debugging
});



var swiper = new Swiper('.mySwipper', {
    slidesPerView: 3, // Number of images shown at the same time
    spaceBetween: 30, // Space between the images
    loop: true, // Enables continuous loop mode
    autoplay: {
        delay: 3000, // Delay in autoplay
        disableOnInteraction: false, // Autoplay will not stop on user interaction
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});


var swiper = new Swiper(".tstswiper",{
    pagination:{
        el:".swiper-pagination"
    },
    loop:true,
    autoplay:true,
    
})
