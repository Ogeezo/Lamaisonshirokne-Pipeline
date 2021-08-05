jQuery(function ($) {
    $('.jw-accordion__ttl').on('click', function () {
      /*クリックでコンテンツを開閉*/
      $(this).next().slideToggle(200);
      /*矢印の向きを変更*/
      $(this).toggleClass('open', 200);
    });
});

jQuery(function ($) {
    var topBtn = $('#page-top');
    // topBtn.hide();
    $(window).scroll(function(){
      if($(this).scrollTop() > 1000) {
        topBtn.addClass('isActive');
      } else {
        topBtn.removeClass('isActive');
      }
    });
});