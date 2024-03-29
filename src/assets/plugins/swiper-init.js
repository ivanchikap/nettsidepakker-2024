var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    slidesPerView: 3,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});