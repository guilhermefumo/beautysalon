const nav = document.querySelector('#header nav')

const toggle = document.querySelectorAll('nav .toggle')

const links = document.querySelectorAll('nav ul li a')

const image2 = document.querySelectorAll('.image2')

const header = document.querySelector('#header')

const arrow_up = document.querySelector('.back-to-top')

const sections = document.querySelectorAll('main section[id]')

const bodyOffsetHeight_83_perc = document.body.offsetHeight * 0.83

const bodyOffsetHeight_5_perc = document.body.offsetHeight * 0.05

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight
    if (checkpointStart && checkpointEnd) {
      const link = document.querySelector(
        'nav ul li a[href*=' + sectionId + ']'
      )

      link.classList.add('active')
    } else {
      const link = document.querySelector(
        'nav ul li a[href*=' + sectionId + ']'
      )
      link.classList.remove('active')
    }
  }
}
window.addEventListener('scroll', () => {
  if (window.scrollY >= header.offsetHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }

  if (window.scrollY >= bodyOffsetHeight_83_perc) {
    arrow_up.classList.add('color')
  } else {
    arrow_up.classList.remove('color')
  }
  if (window.scrollY >= bodyOffsetHeight_5_perc) {
    arrow_up.classList.add('show')
  } else {
    arrow_up.classList.remove('show')
  }
  activateMenuAtCurrentSection()
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  Keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 750,
  reset: true
})
scrollReveal.reveal(
  `#home .text, #home .image,
  #about .text, #about .image,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social`,
  { interval: 100 }
)
