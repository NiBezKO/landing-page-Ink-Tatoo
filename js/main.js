/* изменение класса Header при скролле */

const scrollHeader = document.querySelector('.header');

window.addEventListener("scroll", function() {
  let scrollPos = window.scrollY

  if ( scrollPos > 500) {
    scrollHeader.classList.add('gray')
  }  else {
    scrollHeader.classList.remove('gray')
  }
  
  console.log('scrollPos')

})

/* Меню Навигации */

const menuLinks = document.querySelectorAll('.nav__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    
    function  onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockvalue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector(".header").offsetHeight;

            window.scrollTo({
                top: gotoBlockvalue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }

}

/* выпадающее меню бургер */

const burger = document.querySelector (".burger");
const dropMenu = document.querySelector (".tatoo__nav")

   burger.addEventListener ('click', function() {
     burger.classList.toggle('_active');
     dropMenu.classList.toggle('_active');
});

/* Slider */

document.addEventListener('DOMContentLoaded', function () {
    // инициализация слайдера
    var slider = new SimpleAdaptiveSlider('.slider', {
      autoplay: true,
      interval: 5000,
    });
  });

