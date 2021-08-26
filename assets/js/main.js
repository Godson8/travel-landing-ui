const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle')
const navClose = document.querySelector('#nav-close')
const navLinks = document.querySelectorAll('.nav__link');
const nav = document.querySelector('.header');
const videoFile = document.getElementById('video-file');
const videoButton = document.getElementById('video-button');
const videoIcon = document.getElementById('video-icon');
const scrollUp = document.querySelector('.scrollup');
const sections = document.querySelectorAll('section[id]')

navToggle.addEventListener('click', function(){
    navMenu.classList.add('show-menu')
})

navClose.addEventListener('click', function(){
    navMenu.classList.remove('show-menu');
})

navLinks.forEach(function(e){
    e.addEventListener('click', function(){
        navMenu.classList.remove('show-menu');
    })
})

window.addEventListener('scroll', function(){
    if( window.scrollY >= 100 ){
        nav.classList.add('scroll-header');
    }
    else{
        nav.classList.remove('scroll-header')
    }
})

var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 0,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});

videoButton.addEventListener('click', function(){
    if (videoFile.paused){
        videoFile.play();
        videoIcon.classList.toggle('ri-pause-line');
        videoIcon.classList.remove('ri-play-line');
    }else{
        videoFile.pause();
        videoIcon.classList.remove('ri-pause-line');
        videoIcon.classList.add('ri-play-line');
    }
})
videoFile.addEventListener('ended', function(){
        videoIcon.classList.remove('ri-pause-line');
        videoIcon.classList.add('ri-play-line');
})

window.addEventListener('scroll', function(){
    if (window.scrollY >= 560){
        scrollUp.style.display = 'block'
    } else {
        scrollUp.style.display = 'none'
    }
})



function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Dark theme

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedIcon) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})

sr.reveal(`.home__data, .home__social-link, .home__info,.discover__container,.experience__data,.experience__overlay,.place__card,.sponsor__content,.footer__data,.footer__rights`,{
    origin: 'top',
    interval: 150,
})

sr.reveal(`.about__data,.video__description,.subscribe__description`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay,.video__content,.subscribe__form`,{
    origin: 'right',
    interval: 100,
})