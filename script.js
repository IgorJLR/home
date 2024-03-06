function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const darkModeBtn = document.getElementById('dark-mode-btn');
const body = document.body;

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
});

// Função para exibir o modal de preview
  function showPreview(event) {
    document.querySelector('.modal').classList.add('active');
    var modal = document.getElementById("previewModal");
    modal.style.display = "block";
    // Posiciona o modal próximo ao mouse
    modal.style.top = (event.clientY + 10) + "px";
    modal.style.left = (event.clientX + 10) + "px";
  }

  // Função para esconder o modal de preview
  function hidePreview() {
    document.querySelector('.modal').classList.remove('active');
  }