var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    slidesPerView: 3,
    autoHeight: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        1200: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window width is >= 640px
        1440: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});