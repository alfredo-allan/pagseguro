let slideIndex = 1;
showSlides(slideIndex);

// Função para mostrar o slide atual
function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const circles = document.getElementsByClassName("circulo");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Esconde todos os slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove a classe 'active' de todos os círculos
  for (let i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" active", "");
  }

  // Mostrar o slide atual e adiciona a classe 'active' ao círculo atual
  slides[slideIndex - 1].style.display = "block";
  circles[slideIndex - 1].className += " active";
  updateIndicators();
}

// Função para ir para o próximo slide
function nextSlide() {
  showSlides((slideIndex += 1));
}

// Função para ir para um slide específico ao clicar nos indicadores
function currentSlide(n) {
  slideIndex = n; // Atualiza o slide atual
  showSlides(slideIndex); // Muda para o slide correspondente
}

// Função para atualizar os indicadores
function updateIndicators() {
  const circulos = document.querySelectorAll(".circulo");
  const oblongo = document.getElementById("indicador");

  // Remove a classe 'active' de todos os círculos
  circulos.forEach((circulo, idx) => {
    circulo.classList.remove("active");
    if (idx + 1 === slideIndex) {
      circulo.classList.add("active");
    }
  });

  // Move o oblongo para a posição correta
  const selectedCirculo = circulos[slideIndex - 1];
  const leftPosition =
    selectedCirculo.offsetLeft +
    selectedCirculo.offsetWidth / 2 -
    oblongo.offsetWidth / 2;
  oblongo.style.left = leftPosition + "px";
}

// Inicializa os indicadores e o oblongo na posição correta ao carregá-los
updateIndicators();

// Transição automática a cada 1.5 segundos
setInterval(() => {
  nextSlide();
}, 1500);

// esconder e ler senha
document
  .getElementById("toggle-password")
  .addEventListener("click", function () {
    const inputs = document.querySelectorAll(".password-input");
    const eyeIcon = document.getElementById("olho");

    inputs.forEach((input) => {
      if (input.type === "password") {
        input.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
      } else {
        input.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
      }
    });
  });
