const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    menuToggle.setAttribute('aria-label', isExpanded ? 'Abrir menú' : 'Cerrar menú');
    mainNav.classList.toggle('is-open', !isExpanded);
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menú');
      mainNav.classList.remove('is-open');
    });
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const infoForm = document.querySelector('#info-form');
const formMessage = document.querySelector('#form-message');

if (infoForm && formMessage) {
  infoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!infoForm.reportValidity()) return;

    const name = new FormData(infoForm).get('name').trim();
    formMessage.textContent = `¡Gracias, ${name}! Tu solicitud está lista. Nos pondremos en contacto contigo.`;
    infoForm.reset();
  });
}
