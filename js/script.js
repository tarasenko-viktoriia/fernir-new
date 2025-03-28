// Бургер-меню
document.addEventListener("click", function (e) {
   const targetElement = e.target;
   if (targetElement.closest('.icon-menu')) {
      document.documentElement.classList.toggle('open-menu');
      e.preventDefault();
   }
})
const menuLinks = document.querySelectorAll('.menu__link--icon');

menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        const subMenu = this.nextElementSibling;

        if (subMenu.classList.contains('sub-menu--open')) {
            subMenu.style.maxHeight = null; // Закриття
            subMenu.classList.remove('sub-menu--open');
        } else {
            subMenu.style.maxHeight = subMenu.scrollHeight + "px"; // Відкриття
            subMenu.classList.add('sub-menu--open');
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
   const demoButton = document.querySelector(".demo-button");
   const talkButton = document.querySelector(".talk-button");
   const menu = document.querySelector(".menu");
   const buttonsContainer = document.querySelector(".header__buttons");

   const moveButtonsToMenu = () => {
      if (window.innerWidth <= 989) {
         if (!menu.contains(demoButton)) {
            menu.appendChild(demoButton);
         }
         if (!menu.contains(talkButton)) {
            menu.appendChild(talkButton);
         }
      } else {
         if (!buttonsContainer.contains(demoButton)) {
            buttonsContainer.appendChild(demoButton);
         }
         if (!buttonsContainer.contains(talkButton)) {
            buttonsContainer.appendChild(talkButton);
         }
      }
   };

   moveButtonsToMenu();

   window.addEventListener("resize", moveButtonsToMenu);
});

// Зміна теми
const themeToggle = document.getElementById('theme-toggle');

const heroImage = document.getElementById('hero-image');

const logoImage = document.querySelectorAll('.logo-img');

const product01 = document.getElementById('product-01');
const product02 = document.getElementById('product-02');
const product03 = document.getElementById('product-03');

const blog01 = document.getElementById('blog-img-01');
const blog02 = document.getElementById('blog-img-02');
const blog03 = document.getElementById('blog-img-03');

const logo01 = document.getElementById('efficiency-leaders-logo');
const logo02 = document.getElementById('look-who-charging-logo');
const logo03 = document.getElementById('top-to-toe-icon');
const logo04 = document.getElementById('fan-finders-icon');
const logo05 = document.getElementById('efficiency-leaders-logo-02');
const logo06 = document.getElementById('look-who-charging-logo-02');
const logo07 = document.getElementById('top-to-toe-icon-02');
const logo08 = document.getElementById('fan-finders-icon-02');

const integration01 = document.getElementById('integration-img01');
const integration02 = document.getElementById('integration-img02');
const integration03 = document.getElementById('integration-img03');
const integration04 = document.getElementById('integration-img04');

const testimonials01 = document.getElementById('testimonials-img01');
const testimonials02 = document.getElementById('testimonials-img02');
const testimonials03 = document.getElementById('testimonials-img03');
const testimonials04 = document.getElementById('testimonials-img04');

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

   logoImage.forEach(logo => {
      const logoImgSrc = theme === 'light' ? 'img/icons/logo-light.svg' : 'img/icons/logo.svg';
      logo.setAttribute('src', logoImgSrc);
   });

   const product01ImgSrc = theme === 'light' ? 'img/product-01-light.png' : 'img/product-01.png';
   product01.setAttribute('src', product01ImgSrc);

   const product02ImgSrc = theme === 'light' ? 'img/product-02-light.png' : 'img/product-02.png';
   product02.setAttribute('src', product02ImgSrc);

   const product03ImgSrc = theme === 'light' ? 'img/product-03-light.png' : 'img/product-03.png';
   product03.setAttribute('src', product03ImgSrc);

   const blog01ImgSrc = theme === 'light' ? 'img/blog-01-light.png' : 'img/blog-01.png';
   blog01.setAttribute('src', blog01ImgSrc);

   const blog02ImgSrc = theme === 'light' ? 'img/blog-02-light.png' : 'img/blog-02.png';
   blog02.setAttribute('src', blog02ImgSrc);

   const blog03ImgSrc = theme === 'light' ? 'img/blog-03-light.png' : 'img/blog-03.png';
   blog03.setAttribute('src', blog03ImgSrc);

   const logo01ImgSrc = theme === 'light' ? 'img/icons/efficiency-leaders-light.svg' : 'img/icons/efficiency-leaders.svg';
   logo01.setAttribute('src', logo01ImgSrc);

   const logo02ImgSrc = theme === 'light' ? 'img/icons/look-who-charging-light.svg' : 'img/icons/look-who-charging.svg';
   logo02.setAttribute('src', logo02ImgSrc);
   
   const logo03ImgSrc = theme === 'light' ? 'img/icons/top-to-toe-light.svg' : 'img/icons/top-to-toe.svg';
   logo03.setAttribute('src', logo03ImgSrc);

   const logo04ImgSrc = theme === 'light' ? 'img/icons/fan-finders-light.svg' : 'img/icons/fan-finders.svg';
   logo04.setAttribute('src', logo04ImgSrc);

   const logo05ImgSrc = theme === 'light' ? 'img/icons/efficiency-leaders-light.svg' : 'img/icons/efficiency-leaders.svg';
   logo05.setAttribute('src', logo05ImgSrc);

   const logo06ImgSrc = theme === 'light' ? 'img/icons/look-who-charging-light.svg' : 'img/icons/look-who-charging.svg';
   logo06.setAttribute('src', logo06ImgSrc);
   
   const logo07ImgSrc = theme === 'light' ? 'img/icons/top-to-toe-light.svg' : 'img/icons/top-to-toe.svg';
   logo07.setAttribute('src', logo07ImgSrc);

   const logo08ImgSrc = theme === 'light' ? 'img/icons/fan-finders-light.svg' : 'img/icons/fan-finders.svg';
   logo08.setAttribute('src', logo08ImgSrc);

   const integration01ImgSrc = theme === 'light' ? 'img/integration-img01-light.png' : 'img/integration-img01.png';
   integration01.setAttribute('src', integration01ImgSrc);

   const integration02ImgSrc = theme === 'light' ? 'img/integration-img02-light.png' : 'img/integration-img02.png';
   integration02.setAttribute('src', integration02ImgSrc);

   const integration03ImgSrc = theme === 'light' ? 'img/integration-img03-light.png' : 'img/integration-img03.png';
   integration03.setAttribute('src', integration03ImgSrc);

   const integration04ImgSrc = theme === 'light' ? 'img/integration-img04-light.png' : 'img/integration-img04.png';
   integration04.setAttribute('src', integration04ImgSrc);



   const testimonials01ImgSrc = theme === 'light' ? 'img/john_D-light.png' : 'img/john_D.png';
   testimonials01.setAttribute('src', testimonials01ImgSrc);

   const testimonials02ImgSrc = theme === 'light' ?  'img/ava_A-light.png':'img/ava_A.png';
   testimonials02.setAttribute('src', testimonials02ImgSrc);

   const testimonials03ImgSrc = theme === 'light' ? 'img/james_D-light.png':'img/james_D.png';
   testimonials03.setAttribute('src', testimonials03ImgSrc);

   const testimonials04ImgSrc = theme === 'light' ? 'img/Olivia_I-light.png' : 'img/Olivia_I.png';
   testimonials04.setAttribute('src', testimonials04ImgSrc);

   // Змінюємо fill для всіх SVG
   const svgs = document.querySelectorAll('.icons-footer__link svg path');
   svgs.forEach(svg => {
      svg.setAttribute('fill', theme === 'light' ? '#4F4F4F' : '#9B9CA1');
   });
}


// Курсор на картках
document.querySelectorAll(".cards-product__img, .cards-benefits__item, .cards-blog__img").forEach((card) => { 
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

// Блок з лого
const copy = document.querySelector(".logos-slide").cloneNode(true);
   document.querySelector(".logos").appendChild(copy);

//Слайдер

document.addEventListener("DOMContentLoaded", function () {
   new Swiper(".testimonials__cards", {
      loop: false,
      spaceBetween: 24, 
      navigation: {
         nextEl: ".next-btn",
         prevEl: ".prev-btn",
      },
      pagination: {
			el: '.slider-controls__bullets',
			clickable: true,
		},
      breakpoints: {
         320: { 
            slidesPerView: 1,
            spaceBetween: 12,
         },
         768: { 
            slidesPerView: 2,
            spaceBetween: 18,
         },
         1024: { 
            slidesPerView: 3,
         },
      },
   });
});

document.addEventListener("DOMContentLoaded", function () {
   const headers = document.querySelectorAll(".accordion__header");
   
   headers.forEach(header => {
      header.addEventListener("click", function () {
         const content = this.nextElementSibling;
         
         headers.forEach(h => {
            if (h !== header && h.nextElementSibling.classList.contains("active")) {
               h.nextElementSibling.classList.remove("active");
               h.nextElementSibling.style.maxHeight = "0";
               h.classList.remove("active");
            }
         });

            if (content.classList.contains("active")) {
               content.classList.remove("active");
               content.style.maxHeight = "0";
               this.classList.remove("active");
            } else {
               content.classList.add("active");
               content.style.maxHeight = content.scrollHeight + "px"; 
               this.classList.add("active");
            }
         });
      });
});

// Button 
let btns = document.querySelectorAll(".talk-button, .demo-button, .blog__button, .start-button");

btns.forEach((btn) => {
   btn.addEventListener("mousemove", function (e) {
      let rect = btn.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;

      btn.style.setProperty("--x", x + "px");
      btn.style.setProperty("--y", y + "px");
   });
});

//Footer
document.querySelectorAll('.footer__item h4').forEach(item => {
   item.addEventListener('click', () => {
      const parent = item.parentElement;
      parent.classList.toggle('active');

      document.querySelectorAll('.footer__item').forEach(el => {
         if (el !== parent) {
            el.classList.remove('active');
         }
      });
   });
});
const cards = document.querySelectorAll('.cards-blog__item');
   const blogCards = document.querySelector('.cards-blog');

   if (cards.length % 2 !== 0) {
      blogCards.classList.add('odd');
   } else {
      blogCards.classList.remove('odd');
}
//Product section
document.addEventListener("DOMContentLoaded", function () {
	const tabs = document.querySelectorAll(".nav-product__item");
	const contents = document.querySelectorAll(".content__block");

	tabs.forEach(tab => {
		tab.addEventListener("click", function () {
			tabs.forEach(item => item.classList.remove("active"));
			this.classList.add("active");

			const tabName = this.getAttribute("data-tab");

			contents.forEach(content => content.classList.remove("active"));

			document.querySelector(`[data-content="${tabName}"]`).classList.add("active");
		});
	});
});

document.addEventListener("DOMContentLoaded", function () {
   const dropdown = document.querySelector(".menu__item .menu__link--icon");

   dropdown.addEventListener("click", function (event) {
      event.preventDefault(); 
      this.parentElement.classList.toggle("active"); 
   });
});