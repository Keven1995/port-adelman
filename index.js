
const menuHamburger = document.querySelector(".menu-hamburger");
const nav = document.querySelector(".navbar");
const links = document.querySelectorAll(".navbar-links li a");

let swiper = createSwiper(".mySwiper", ".swiper-pagination", "swiper-button-next", "swiper-button-prev");
let header = document.getElementById('header');


function createSwiper(container, pagination, nextButton, prevButton){
    return new Swiper(container, {
        slidesPerView: handleWidth(),
        spaceBetween: 30,
        pagination: {
            el: pagination,
            clickable: true,
        },
        navigation: {
            nextEl: nextButton,
            prevEl: prevButton,
        },
    });
}

function handleWidth() {
    let getWidth = window.innerWidth || document.documentElement.clientWidth;
    let slideShow = 3;

    if (getWidth < 1001) {
        slideShow = 2;
    }

    if (getWidth < 700) {
        slideShow = 1;
    }

    return slideShow
}

menuHamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

links.forEach(item => {
    item.addEventListener("click", () =>{
        nav.classList.toggle("active");
    })
})

function openWhatsApp() {

    var phoneNumber = "+556199232-5294";
    var whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber;
    window.open(whatsappURL);
}

window.addEventListener("resize", () => {
    swiper.params.slidesPerView = handleWidth();
    swiper.update();
})

window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        header.style.background = '#6ec6ca'
    } else {
        header.style.background = 'transparent'
    }
})

