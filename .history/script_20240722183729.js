let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const circles = document.getElementsByClassName("circulo");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

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
  showSlides((slideIndex += 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

let currentIndex = 1; // Inicializa com o primeiro slide

function currentSlide(index) {
  currentIndex = index;
  updateIndicators();
}

function updateIndicators() {
  const circulos = document.querySelectorAll(".circulo");
  const oblongo = document.getElementById("indicador");

  // Remove a classe 'active' de todos os círculos
  circulos.forEach((circulo, idx) => {
    circulo.classList.remove("active");
    if (idx + 1 === currentIndex) {
      circulo.classList.add("active");
    }
  });

  // Move o oblongo para a posição correta
  const selectedCirculo = circulos[currentIndex - 1];
  const leftPosition =
    selectedCirculo.offsetLeft +
    selectedCirculo.offsetWidth / 2 -
    oblongo.offsetWidth / 2;
  oblongo.style.left = leftPosition + "px";
}

// Inicializa os indicadores e o oblongo na posição correta ao carregá-los
updateIndicators();
