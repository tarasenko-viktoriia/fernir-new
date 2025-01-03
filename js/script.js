// Бургер-меню
document.addEventListener("click", function (e) {
   const targetElement = e.target;
   if (targetElement.closest('.icon-menu')) {
      document.documentElement.classList.toggle('open-menu');
      e.preventDefault();
   }
})

// Зміна теми
const themeToggle = document.getElementById('theme-toggle');
const heroImage = document.getElementById('hero-image');

const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

updateIcon(savedTheme);

themeToggle.addEventListener('click', () => {
   const currentTheme = document.documentElement.getAttribute('data-theme');
   const newTheme = currentTheme === 'light' ? 'dark' : 'light';

   document.documentElement.setAttribute('data-theme', newTheme);
   localStorage.setItem('theme', newTheme);

   updateIcon(newTheme);
});

function updateIcon(theme) {
   const iconSrc = theme === 'light' ? 'img/icons/light-theme.svg' : 'img/icons/dark-theme.svg';
   themeToggle.querySelector('img').setAttribute('src', iconSrc);

   const heroImgSrc = theme === 'light' ? 'img/hero-img-white.png' : 'img/hero-img.png';
   heroImage.setAttribute('src', heroImgSrc); 
}

