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


// -----------------  Слайдер --------------------

// const Sliders = {
//   INDEX_SLIDER: {
//     ELEMENT: $('.index-slider'),
//     SETTINGS: {
//       accessibility: true,
//       arrows: false,
//       dots: false,
//       speed: 1500,
//       slidesToShow: 1,
//       infinite: false,
//     },
//     BREAKPOINT: 576,
//     CLASSNAME: '.flex-container',
//   },
// }

// function initialazeSlickSlider(slider) {
//   const {
//     BREAKPOINT,
//     SETTINGS,
//     ELEMENT
//   } = slider;
//   (document.documentElement.clientWidth <= BREAKPOINT || BREAKPOINT === undefined) && ELEMENT.slick(SETTINGS);
// }

// function toggleSlider(slider) {
//   const {
//     BREAKPOINT,
//     ELEMENT,
//     SETTINGS
//   } = slider;
//   document.documentElement.clientWidth > BREAKPOINT && ELEMENT.hasClass('slick-initialized') && ELEMENT.slick('unslick');
//   document.documentElement.clientWidth <= BREAKPOINT && !ELEMENT.hasClass('slick-initialized') && ELEMENT.slick(SETTINGS);
// }

// function toggleExtraClass(slider) {
//   const {
//     BREAKPOINT,
//     ELEMENT,
//     CLASSNAME
//   } = slider;
//   document.documentElement.clientWidth > BREAKPOINT && !ELEMENT.hasClass(CLASSNAME) && ELEMENT.addClass(CLASSNAME);
//   document.documentElement.clientWidth <= BREAKPOINT && ELEMENT.hasClass(CLASSNAME) && ELEMENT.removeClass(CLASSNAME);
// }

// initialazeSlickSlider(Sliders.INDEX_SLIDER);

// window.addEventListener('resize', () => {
//   toggleSlider(Sliders.INFORM);
//   toggleExtraClass(Sliders.INFORM);
// });


// dinamic row


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


// fade animatiuon

let tl = gsap.timeline();

tl.from(".fade", {
  opacity: 0,
  y: 100,
  duration: 0.7
})
tl.from(".fadeS", {
  opacity: 0,
  y: 100,
  duration: 1
})
tl.from(".fadeR", {
  opacity: 0,
  x: 100,
  duration: 1
})
tl.from(".fadeT", {
  opacity: 0,
  y: 100,
  duration: 1.2
})
tl.from(".fadeF", {
  opacity: 0,
  y: 100,
  duration: 1.4
})


// btn on click
$('.btn').click(function () {
  $(this).css('background-color', '#E93D02');
});

$('.btn__reg').click(function () {
  $(this).css('color', '#E93D02');
  $(this).css('border', '1px solid #E93D02');
});

$('.btn__pag').click(function () {
  $(this).css('color', '#FFFFFF');
  $(this).css('background-color', '#FF5B22');
});

//mixitup

$(function () {
  $('.blog__inner').mixItUp({
    selectors: {
      target: '.latest__item',
      filter: '.blog__btn',
    }
  });
});
