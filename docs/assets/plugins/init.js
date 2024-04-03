$(function(){
    $("#website-slider").twentytwenty();

    $('.testimonial__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 577,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
});