'use strict';

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
const header = document.querySelector('.header');

function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Menü öffnen');
  nav.classList.remove('open');
}

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  nav.classList.toggle('open', open);
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  });
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    closeMenu();
    toggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header')) closeMenu();
});
matchMedia('(min-width: 768px)').addEventListener('change', closeMenu);

// Calculate the current section at the header edge, including short sections.
const sections = [...document.querySelectorAll('main section[id]')];
let scrollPending = false;
function updateNavigation() {
  header.classList.toggle('scrolled', window.scrollY > 10);
  const edge = header.offsetHeight + 80;
  let current = sections[0];
  sections.forEach(section => {
    if (section.getBoundingClientRect().top <= edge) current = section;
  });
  nav.querySelectorAll('a:not(.button)').forEach(link => {
    const active = link.getAttribute('href') === `#${current.id}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scrollPending = false;
}
window.addEventListener('scroll', () => {
  if (!scrollPending) {
    scrollPending = true;
    requestAnimationFrame(updateNavigation);
  }
}, { passive: true });
window.addEventListener('resize', updateNavigation);
updateNavigation();
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('#service').value = link.dataset.service;
  });
});

// Demo only: no endpoint, fetch, analytics or persistent browser storage.
// HTML method="dialog" also prevents network submission without JavaScript.
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
const requiredFields = [...form.querySelectorAll('[required]')];
let submitted = false;

requiredFields.forEach(field => {
  const error = document.createElement('p');
  error.id = `${field.id}-error`;
  error.className = 'field-error';
  error.hidden = true;
  if (field.type === 'checkbox') field.closest('.checkbox').after(error);
  else field.after(error);
  field.setAttribute('aria-describedby', error.id);
});

function fieldError(field) {
  if (field.type === 'checkbox') {
    return field.checked ? '' : 'Bitte bestätigen Sie den Datenschutzhinweis und den Demo-Status.';
  }
  if (!field.value.trim()) {
    return ({ name: 'Bitte geben Sie Ihren Namen ein.', email: 'Bitte geben Sie Ihre E-Mail-Adresse ein.', message: 'Bitte beschreiben Sie kurz Ihre Anfrage.' })[field.id];
  }
  if (field.type === 'email' && field.validity.typeMismatch) {
    return 'Bitte geben Sie eine gültige E-Mail-Adresse ein, z. B. name@beispiel.de.';
  }
  return '';
}
function validateField(field) {
  const message = fieldError(field);
  const error = document.querySelector(`#${field.id}-error`);
  error.textContent = message;
  error.hidden = !message;
  if (message) field.setAttribute('aria-invalid', 'true');
  else field.removeAttribute('aria-invalid');
  return !message;
}
requiredFields.forEach(field => {
  field.addEventListener('blur', () => {
    if (submitted || field.value.trim() || field.type === 'checkbox') validateField(field);
  });
});
form.addEventListener('submit', event => {
  event.preventDefault();
  submitted = true;
  let firstInvalid = null;
  let errors = 0;
  requiredFields.forEach(field => {
    if (field.type !== 'checkbox') field.value = field.value.trim();
    if (!validateField(field)) {
      firstInvalid ??= field;
      errors += 1;
    }
  });
  status.hidden = false;
  status.classList.toggle('error', Boolean(firstInvalid));
  if (firstInvalid) {
    status.textContent = `Bitte prüfen Sie ${errors === 1 ? 'das markierte Feld' : 'die markierten Felder'}. Es wurden keine Daten übertragen.`;
    firstInvalid.focus();
    return;
  }
  status.textContent = 'Vielen Dank! Dies ist eine Demo-Website – es wurden keine Daten übertragen.';
  status.focus();
});
function updateForm(event) {
  const field = event.target;
  if (!field.matches('input,textarea,select')) return;
  if (field.required && (submitted || field.hasAttribute('aria-invalid'))) validateField(field);
  status.hidden = true;
}
form.addEventListener('input', updateForm);
form.addEventListener('change', updateForm);

const dialog=document.querySelector('#legal-dialog');
document.querySelectorAll('[data-legal]').forEach(button=>button.addEventListener('click',()=>{const privacy=button.dataset.legal==='privacy';document.querySelector('#legal-title').textContent=privacy?'Datenschutzhinweis':'Impressum – Demo-Platzhalter';document.querySelector('#legal-content').innerHTML=privacy?'<p>Diese Website ist ein Portfolio-Konzept von WEBKANT. MainGlanz ist ein fiktives Unternehmen. Dieser Hinweis ist kein rechtlich vollständiges Datenschutzdokument.</p><h3>Demo-Formular</h3><p>Ihre Eingaben werden ausschließlich im Browser geprüft. Die Website sendet sie an keinen Empfänger und speichert sie weder auf einem Server noch im lokalen Browser-Speicher.</p><h3>Technische Bereitstellung</h3><p>Diese Website verwendet keine eigenen Analysewerkzeuge, Cookies oder externen Schriftarten. Beim Abruf können durch den Hosting-Anbieter technische Verbindungsdaten verarbeitet werden. Vor einem echten Geschäftsbetrieb muss ein passender Datenschutzhinweis erstellt werden.</p>':'<p>Konzeptwebsite von WEBKANT – MainGlanz ist ein fiktives Unternehmen.</p><p>Es gibt keine reale Geschäftsadresse, Unternehmensregistrierung oder Kontaktstelle für MainGlanz. Dieser Bereich ist ein deutlich gekennzeichneter Demo-Platzhalter und kein rechtlich vollständiges Impressum.</p><p>Vor einer geschäftlichen Verwendung müssen die tatsächlichen Angaben des verantwortlichen Betreibers ergänzt werden.</p>';dialog.showModal();}));
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{const bounds=dialog.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)dialog.close();});

