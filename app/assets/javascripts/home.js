var Blogger = Blogger || {};

Blogger.home = {
  index: function(){
    $(".banner").hide()
                .css('opacity', 0)
                .slideDown(1200)
                .animate(
                  { opacity: 1 },
                  { queue: false, duration: 1200 }
                );
    $(".try-it").click(function(){
      $(".notification").slideDown(200).delay(3000).slideUp(200);
    });
  }
}
