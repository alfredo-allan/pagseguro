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

.indicadores {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.circulo {
    width: 12px; /* Ajuste o tamanho conforme necessário */
    height: 12px; /* Ajuste o tamanho conforme necessário */
    border-radius: 50%;
    background-color: gray; /* Cor padrão */
    margin: 0 5px;
    cursor: pointer;
}

.circulo.active {
    background-color: blue; /* Cor quando ativo */
}

.oblongo {
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 40px; /* Ajuste a largura conforme necessário */
    height: 8px; /* Ajuste a altura conforme necessário */
    background-color: rgba(0, 0, 255, 0.5); /* Cor do oblongo */
    border-radius: 5px; /* Bordas arredondadas */
    transition: left 0.3s ease; /* Animação suave ao mover */
}
