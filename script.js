// Máquina de Escrever
const titulo = document.getElementById('digitando');
const texto = "Filipe dos Santos Menezes"; // <-- Edite aqui o seu nome

let index = 0;

function escrever() {
  titulo.textContent = texto.slice(0, index);
  index++;

  if (index <= texto.length) {
    setTimeout(escrever, 150); // velocidade de digitação
  }
}

escrever();

// Rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(ancora => {
  ancora.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Botão Voltar ao Topo
const botaoTopo = document.getElementById('voltarTopo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    botaoTopo.style.display = 'block';
  } else {
    botaoTopo.style.display = 'none';
  }
});

botaoTopo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Animação de aparição
const animarElementos = document.querySelectorAll('.animar');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');
    }
  });
}, {
  threshold: 0.3
});

animarElementos.forEach(el => observer.observe(el));
