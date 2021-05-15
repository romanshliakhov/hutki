
// mobile menu
$(".hamburger").click(function (event) {
  $(".hamburger").toggleClass('hamburger__active'),
    $(".mobile__menu ").toggleClass('mobile__menu__active');
});

// переменная не переназначается, поэтому используем const
// используем querySelectorAll, чтобы собрать массив со всеми сущностями .select
const select = document.querySelectorAll('.select');

// если массив не пустой, пробегаемся в цикле по каждой найденой сущности
if (select.length) {
  select.forEach(item => {
    // достаем из текущей сущности .select__current
    const selectCurrent = item.querySelector('.select__current');

    item.addEventListener('click', event => {
      const el = event.target.dataset.choice;
      const text = event.target.innerText;

      // Проверяем является ли это choosen и не выбрано ли его значение уже
      if (el === 'choosen' && selectCurrent.innerText !== text) {
        selectCurrent.innerText = text;
      }

      item.classList.toggle('is-active');
    });
  });
}

// accordeon

$('.faq__item-question').click(function () {
  const parent = $(this).parent();

  if (parent.hasClass('faq__item--active')) {
    parent.removeClass('faq__item--active');
  } else {
    $('.faq__item').removeClass('faq__item--active')
    parent.addClass('faq__item--active');
  }
});

function fadeAnim() {
  let optionsFade = {
    rootMargin: '100px 0px -15% 0px'
  };

  let itemDelay = .12;

  setTimeout(function () {
    // STAGGER
    let observerStaggerAnim = new IntersectionObserver(function (entries, observer) {
      var itemLoad = 0;
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          gsap.fromTo(entry.target, {
            opacity: 0,
            y: 100
          }, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            delay: itemLoad * itemDelay,
            ease: "power2.out",
          })
          itemLoad++;
          observer.unobserve(entry.target);
        } else {
          gsap.to(entry.target, {
            opacity: 0,
            y: 100,
            duration: .5
          })
        }
      });
    }, optionsFade);

    $fadeEl.each(function (key, val) {
      observerStaggerAnim.observe(val);
    });

  }, 100);

  ScrollTrigger.create({
    trigger: ".animate__sec-inner",
    start: "10px bottom",
    end: "top top",
    onUpdate: self => {
      // console.log("velocity:", self);
      gsap.to('.animate__sec-inner', {
        xPercent: -self.progress * 50
      })
    }
  });
}

// accordeon mobile

$('.mobile__accordeon-header').click(function () {
  const parent = $(this).parent();

  if (parent.hasClass('mobile__nav-item--active')) {
    parent.removeClass('mobile__nav-item--active');
  } else {
    $('.mobile__nav-item').removeClass('mobile__nav-item--active')
    parent.addClass('mobile__nav-item--active');
  }
});

function fadeAnim() {
  let optionsFade = {
    rootMargin: '100px 0px -15% 0px'
  };

  let itemDelay = .12;

  setTimeout(function () {
    // STAGGER
    let observerStaggerAnim = new IntersectionObserver(function (entries, observer) {
      var itemLoad = 0;
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          gsap.fromTo(entry.target, {
            opacity: 0,
            y: 100
          }, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            delay: itemLoad * itemDelay,
            ease: "power2.out",
          })
          itemLoad++;
          observer.unobserve(entry.target);
        } else {
          gsap.to(entry.target, {
            opacity: 0,
            y: 100,
            duration: .5
          })
        }
      });
    }, optionsFade);

    $fadeEl.each(function (key, val) {
      observerStaggerAnim.observe(val);
    });

  }, 100);

  ScrollTrigger.create({
    trigger: ".animate__sec-inner",
    start: "10px bottom",
    end: "top top",
    onUpdate: self => {
      // console.log("velocity:", self);
      gsap.to('.animate__sec-inner', {
        xPercent: -self.progress * 50
      })
    }
  });
}

//mixitup

$(function () {
  $('.blog__inner').mixItUp({
      selectors: {
        target: '.latest__item',
        filter: '.blog__btn',
      }
    }
  );
});
