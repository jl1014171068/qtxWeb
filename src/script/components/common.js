(function () {
    var ling = $(document).scrollTop();
    function home_navShow() {
        if (ling > 190) {
            $('.header').addClass('active');
            $('.header .logo img').attr('src', '/libs/images/footer_logo.png');
            var html = $('.home_nav .top_nav').html();
            if($('.header .top_nav li').length){
               $('.header .top_nav').show();
               return false;
            }
            $('.header .top_nav').html(html);
        } else {
            $('.header').removeClass('active');
            $('.header .logo img').attr('src', '/libs/images/logo.png');
            $('.header .top_nav').hide();
        }
    }
    home_navShow();
    $(window).scroll(function () {
        ling = $(document).scrollTop();
        home_navShow(ling);
    });
})();