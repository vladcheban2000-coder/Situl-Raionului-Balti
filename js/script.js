function mobileMenu() {
    var x = document.getElementsByTagName("navbar")[0];
    if (x.className === "") {
        x.className += "mobile";
    } else {
        x.className = "";
    }
}


let images = [
        "../images/mincare1.jpg", 
        "../images/mincare2.jpg",
        "../images/mincare3.jpg",
        "../images/mincare4.jpg",
        "../images/mincare5.jpg",
        "../images/mincare6.jpg",
        "../images/mincare7.jpg"
    ];
let index = 0;

function showSlide() {
    document.getElementById("slide").src = images[index];
}

function nextSlide() {
    index = (index + 1) % images.length;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    showSlide();
}

// SWIPE (telefon)
let startX = 0;
const slideImg = document.getElementById("slide");

slideImg.addEventListener("touchstart", function(e) {
    startX = e.touches[0].clientX;
});

slideImg.addEventListener("touchend", function(e) {
    let endX = e.changedTouches[0].clientX;

    if (startX > endX + 50) nextSlide(); // swipe stânga
    if (startX < endX - 50) prevSlide(); // swipe dreapta
});

let autoSlide = setInterval(nextSlide, 3000);