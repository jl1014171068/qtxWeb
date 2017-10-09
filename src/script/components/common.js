(function () {
    var ling = $(document).scrollTop();

    function home_navShow() {
        if (ling > 190) {
            $('.header').addClass('active');
            $('.header .logo img').attr('src', '/libs/images/footer_logo.png');
            var html = $('.home_nav .top_nav').html();
            if ($('.header .top_nav li').length) {
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

//列表页面点击搜索的开关时
$(function () {
    $('.pub_switch').each(function (i, e) {
        $(e).find('input[type="radio"]').after('<span class="panpel"></span>\
      <div class="top_text">\
          <span>' + $(e).find('input[type="radio"]').data('to') + '</span>\
          <span>' + $(e).find('input[type="radio"]').data('from') + '</span>\
          </div>');
        $(e).find('input[type="radio"]').val($(e).find('input[type="radio"]').data('to'));
        $(this).click(function () {
            var $self = $(this),
                $input = $self.find('input[type="radio"]'),
                to = $input.data('to'),
                from = $input.data('from');
            if ($self.hasClass('active')) {
                $(this).removeClass('active');
                $input.val(to)
            } else {
                $self.addClass('active');
                $input.val(from)
            }
        })
    });
});

//作品列表页面点击颜色选择的时候
(function () {
    var $dom = $('.screen_color'),
        $inp = $dom.find('input');
    $dom.find('img').click(function () {
        var $self = $(this);
        if($self.hasClass('active')){
            $self.removeClass('active');
            $inp.val('');
        }else{
            $self.parents().find('img').removeClass('active');
            $self.addClass('active');
            $inp.val($self.data('color'));
        }
        return false;
    });
})();

//作品列表页面形状选择
(function(){
   var $dom = $('.screen_shape'),
       $inp = $dom.find('input');
   $dom.find('.shape_panpel div').click(function(){
       $dom.find('.shape_panpel div').each(function(i,e){
           if($(e).find('img').attr('src').indexOf('-1.png')!=-1){
               var src = $(e).find('img').attr('src').replace('-1.png','')+'.png';
               $(e).find('img').attr('src',src);
           }
           $(this).parent().find('div').removeClass('active');
       });
       if($(this).hasClass('active')){
           var src = $(this).find('img').attr('src').replace('-1.png','')+'.png';
           $(this).find('img').attr('src',src);
           $(this).removeClass('active');
           $inp.val('');
       }else{
           var src = $(this).find('img').attr('src').replace('.png','')+'-1.png';
           $(this).find('img').attr('src',src);
           $(this).addClass('active');
           $inp.val($(this).find('img').data('shape'))
       }
   });
})();