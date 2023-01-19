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
    loop:true,
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

const   contactForm = document.getElementById('contact-form'),
        contactName = document.getElementById('contact-name'),
        contactEmail = document.getElementById('contact-email'),
        contactProject = document.getElementById('contact-project'),
        contactMessage = document.getElementById('contact-message');

const sendEmail = (e) =>{
    e.preventDefault();
    // check if value present
    if(contactEmail.value === '' || contactName.value === '' || contactProject.value === ''){
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')
        // show message
        contactMessage.textContent = 'Write all the input fields 📩'
    }else{
        // serviceId - templateId - #form - publicKey
        emailjs.sendForm('service_xj7othp','template_trl7gfe','#contact-form','po-4ihjS6h8amMRJd')
        // configure by signin 
        // skipped part till 
        .then(()=>{
            // show message with blue color
            contactMessage.classList.remove('color-red');
            contactMessage.classList.add('color-blue');
            contactMessage.textContent='Message sent ✅'
            setTimeout(()=>{
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


// ======= SHOW SCROLL UP =========


// ======= DARK LIGHT THEME =========


// ======= CHANGE BACKGROUND HEADER =========


// ======= SCROLL REVEAL ANIMATION =========