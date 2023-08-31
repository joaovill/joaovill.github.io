$( document ).ready(function() {
    $('#owl-home').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:['',''],
        items: 1,
    })
    if($(window).width() < 767) {
        $('#owl-why').owlCarousel({
            autoplay: true,
            autoplaySpeed: 1500,
            center: false,
            dots: false,
            items: 1,
            margin:0,
            nav:false,
        })
    }
})