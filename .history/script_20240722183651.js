let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const circles = document.getElementsByClassName("circulo");
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (let i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";  
    circles[slideIndex - 1].className += " active";
}

function nextSlide() {
    showSlides(slideIndex += 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
