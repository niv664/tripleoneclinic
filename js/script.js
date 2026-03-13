// Language switching functionality
const languageSwitch = document.getElementById('language-switch');
const elements = document.querySelectorAll('[data-i18n]');

languageSwitch.addEventListener('change', (e) => {
 const lang = e.target.value;
 const translations = JSON.parse(localStorage.getItem(`lang-${lang}`));

 if (!translations) return;

 elements.forEach(el => {
 const key = el.getAttribute('data-i18n');
 el.textContent = translations[key] || el.textContent;
 });
});

// Load language from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
 const lang = localStorage.getItem('language') || 'en';
 languageSwitch.value = lang;
 const translations = JSON.parse(localStorage.getItem(`lang-${lang}`));

 if (translations) {
 elements.forEach(el => {
 const key = el.getAttribute('data-i18n');
 el.textContent = translations[key] || el.textContent;
 });
 }
});