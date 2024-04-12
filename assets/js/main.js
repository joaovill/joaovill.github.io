$( document ).ready(function() {
    $('#owl-home').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:['',''],
        items: 1,
    })
    $('#owl-products, #owl-products2').owlCarousel({
        center: true,
        dots: false,
        items: 1,
        margin:15,
        nav:false,
        responsive: {
            0:{
                items: 1
            },
            768:{
                items: 3
            },
            1200:{
                items: 5,
                center:false,
                nav:true,
                navText:['','']
            },
        }
    })
    if(window.innerWidth < 768){
        $('#owl-why').owlCarousel({
            autoplay: true,
            autoplaySpeed: 1500,
            center: false,
            dots: false,
            items: 1,
            margin:0,
            nav:false
        })
    }
})