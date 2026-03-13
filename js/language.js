function loadLanguage(lang) {
 const translations = JSON.parse(localStorage.getItem(`lang-${lang}`));
 if (!translations) return;

 document.querySelectorAll('[data-i18n]').forEach(el => {
 const key = el.getAttribute('data-i18n');
 el.textContent = translations[key] || el.textContent;
 });
}

function initLanguageSelector() {
 const selector = document.getElementById('language-switch');
 if (!selector) return;

 selector.addEventListener('change', (e) => {
 const lang = e.target.value;
 localStorage.setItem('language', lang);
 loadLanguage(lang);
 });

 // Load on page load
 const defaultLang = localStorage.getItem('language') || 'en';
 selector.value = defaultLang;
 loadLanguage(defaultLang);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initLanguageSelector);