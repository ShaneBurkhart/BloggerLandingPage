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

    $(".try-it").click(function(event){
      event.preventDefault();
      //calculate destination place
      var dest=0;
      if($(this.hash).offset().top > $(document).height() - $(window).height()){
          dest = $(document).height() - $(window).height();
      }else{
          dest = $(this.hash).offset().top;
      }
      //go to destination
      $('html,body').animate({scrollTop:dest}, 500, 'swing');
    });
  }
}
