$( document ).ready(function() {
    console.log('funfo');
    $('#owl-home').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:['<','>'],
        items: 1,
    })
})