$('.navbar').on('click', 'a', function (event) {
    event.preventDefault();
    var target = $(this).attr("href");
    if ($(this).attr('id') === 'goindex') {
        window.open('https://www.smarter.com.tw/');
        return
    }
    $('html,body').animate({
        scrollTop: $(target).offset().top
    }, 500);
});

$('.slide-toggle').on('click', function () {
    console.log($('.navbar.collapse.collapse'));
    $('.toggleBlock').slideToggle();
})

$('.navbar-toggler').on('click', function () {
    console.log(12313);
    $('#navbarSupportedContent').slideToggle();
})

$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $('#ousidegoTop').css('opacity', '1');
    } else {
        $('#ousidegoTop').css('opacity', '0');
    }
}); 
