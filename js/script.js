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
const logoImage = document.getElementById('logo-img');
const product01 = document.getElementById('product-01');
const product02 = document.getElementById('product-02');
const product03 = document.getElementById('product-03');

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

   const logoImgSrc = theme === 'light' ? 'img/icons/logo-light.svg' : 'img/icons/logo.svg';
   logoImage.setAttribute('src', logoImgSrc); 

   const product01ImgSrc = theme === 'light' ? 'img/product-01-light.png' : 'img/product-01.png';
   product01.setAttribute('src', product01ImgSrc); 

   const product02ImgSrc = theme === 'light' ? 'img/product-02-light.png' : 'img/product-02.png';
   product02.setAttribute('src', product02ImgSrc); 

   const product03ImgSrc = theme === 'light' ? 'img/product-03-light.png' : 'img/product-03.png';
   product03.setAttribute('src', product03ImgSrc); 
}

// Курсор на картках
document.querySelectorAll(".cards-product__img, .cards-benefits__item").forEach((card) => { 
   const circle = card.querySelector(".circle");

   if (!circle) return;

   let mouseX = 0, mouseY = 0; 
   let circleX = 0, circleY = 0; 
   let isHovered = false;

   card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      if (!isHovered) {
         isHovered = true;
         circle.style.opacity = "1";
         animateCircle(); 
      }
   });

   card.addEventListener("mouseleave", () => {
      isHovered = false;
      circle.style.opacity = "0";
   });

   function animateCircle() {
      if (!isHovered) return;

      circleX += (mouseX - circleX) * 0.1;
      circleY += (mouseY - circleY) * 0.1;

      circle.style.left = `${circleX}px`;
      circle.style.top = `${circleY}px`;

      requestAnimationFrame(animateCircle);
   }
});
