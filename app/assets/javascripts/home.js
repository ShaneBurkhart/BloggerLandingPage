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
  }
}
