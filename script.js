// Validação de formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    // Verifica se todos os campos estão preenchidos
    if (!name || !email || !message) {
        event.preventDefault(); // Impede o envio do formulário
        alert('Por favor, preencha todos os campos!');
    }
});

// Animação de rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito de hover nos cards de projetos
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease-in-out';
    });
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'scale(1)';
    });
});

// Modal de Projeto (exemplo simples)
const projectLinks = document.querySelectorAll('.project-card a');
projectLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const projectUrl = this.href;
        alert('Abrindo o projeto: ' + projectUrl);
    });
});