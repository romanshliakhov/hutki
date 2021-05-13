// accordeon

$('.faq__item-question').click(function(){
	const parent = $(this).parent();

	if(parent.hasClass('faq__item--active')) {
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

