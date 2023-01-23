/* ======= SHOW MENU ========= */
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")

// if exist
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// hide menu if close button exist
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// ================= REMOVE MENU WITH LINK CLICK ================
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// swiper js
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        },
    },
});

// ======= EMAIL JS =========
// https://youtu.be/5-_2z-DdWng?t=6683

const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactProject = document.getElementById('contact-project'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();
    // check if value present
    if (contactEmail.value === '' || contactName.value === '' || contactProject.value === '') {
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')
        // show message
        contactMessage.textContent = 'Write all the input fields 📩'
    } else {
        // serviceId - templateId - #form - publicKey
        emailjs.sendForm('service_xj7othp', 'template_trl7gfe', '#contact-form', 'po-4ihjS6h8amMRJd')
            // configure by signin 
            // skipped part till 
            .then(() => {
                // show message with blue color
                contactMessage.classList.remove('color-red');
                contactMessage.classList.add('color-blue');
                contactMessage.textContent = 'Message sent ✅'
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 5000)
            }, (error) => {
                alert('Oops! Something is failed...', error)
            })
        // to clear the input field
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail);

// ======= SCROLL SECTION ACTIVE LINK =========

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ======= SHOW SCROLL UP =========

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)

// ======= DARK LIGHT THEME =========

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// validating the dark-theme class and icon
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// validate if, the user previously choose a topic
if (selectedTheme) {
    // If the validation is fulfilled, ask  if activated or deactivated the dark
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

// ======= CHANGE BACKGROUND HEADER =========
const scrollHeader = () => {
    const header = document.getElementById('header')
    // scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader);

// ======= SCROLL REVEAL ANIMATION =========
const sr = ScrollReveal({  /* capital S in ScrollReveal */
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true   for repeat animation
})

sr.reveal(`.home__data, .projects__container`)
sr.reveal(`.home__info div, .footer__container`, {delay: 600, origin: 'bottom', interval: 100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1), .qualification__img`, {origin: 'left'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2), .qualification__img2`, {origin: 'right'})
sr.reveal(`.qualification__content, .services__card`, {interval: 200})

const whatsappLink = document.getElementById("contact-whatsapp-link"),
instagramLink = document.getElementById("contact-instagram-link"),
qrCodeWhats = document.getElementById("qr-code-whatsapp"),
qrCodeInsta = document.getElementById("qr-code-instagram");

whatsappLink.addEventListener("mouseenter", ()=>{
    qrCodeWhats.classList.add('show__qr');
    console.log("mouseenter")
    console.log(qrCode.className)
})
whatsappLink.addEventListener("mouseleave", ()=>{
    qrCodeWhats.classList.remove('show__qr')
    console.log("mouseleave")
    console.log(qrCode.className)
})
instagramLink.addEventListener("mouseenter", ()=>{
    qrCodeInsta.classList.add('show__qr');
    console.log("mouseenter")
})
instagramLink.addEventListener("mouseleave", ()=>{
    qrCodeInsta.classList.remove('show__qr')
    console.log("mouseleave")
})
// task remaining, download CV button
const homePerfilImg = document.getElementById("home-perfil-img"),
    cvArea = document.getElementById("cv-area"),
    cvButton = document.getElementById("home-perifil-cv-button");

    homePerfilImg.addEventListener("mouseenter", ()=>{
        cvButton.classList.add('show__cv-button');
        console.log("mouseenter")
    })
    cvArea.addEventListener("mouseenter", ()=>{
        cvButton.classList.add('show__cv-button');
    })
    cvArea.addEventListener("mouseleave", ()=>{
        cvButton.classList.remove('show__cv-button');
    })
    homePerfilImg.addEventListener("mouseleave", ()=>{
        cvButton.classList.remove('show__cv-button')
        console.log("mouseleave")
    })

    // cvButton.addEventListener('click', (e)=> e.preventDefault())
    


