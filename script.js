const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');
const revealElements = document.querySelectorAll('.reveal');

function toggleMenu() {
  const isActive = navbar.classList.toggle('active');
  menuToggle.textContent = isActive ? '✕' : '☰';
}

function closeMenu() {
  if (navbar.classList.contains('active')) {
    navbar.classList.remove('active');
    menuToggle.textContent = '☰';
  }
}

menuToggle.addEventListener('click', toggleMenu);
navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => observer.observe(element));

// Integração do formulário com WhatsApp
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Previne o envio padrão do formulário

  // Pega os valores dos campos
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Número do WhatsApp (formato internacional: 5511999999999)
  const phoneNumber = '+5534991982332'; // Substitua pelo número real se necessário

  // Constrói a mensagem
  const whatsappMessage = `Olá, meu nome é ${name}.\nEmail: ${email}\nMensagem: ${message}`;

  // Codifica a mensagem para URL
  const encodedMessage = encodeURIComponent(whatsappMessage);

  // Cria o link do WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Abre o WhatsApp
  window.open(whatsappUrl, '_blank');
});
