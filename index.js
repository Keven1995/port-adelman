let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let header = document.getElementById('header')

window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        header.style.background = '#6ec6ca'
    } else {
        header.style.background = 'transparent'
    }
})

function openWhatsApp() {
    
    var phoneNumber = "+556199232-5294";
    var whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber;
    window.open(whatsappURL);
}
