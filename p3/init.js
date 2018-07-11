$( document ).ready(function() {
      $("#container").mousemove(function(e) {
    parallaxIt(e, ".slide", -100);
    parallaxIt(e, ".hero", -30);
    });

    function parallaxIt(e, target, movement) {
    var $this = $("#container");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
    }

    $(".button").click(function(){
      console.log('1');
    $(".hold-questions").addClass("hold-questionsshow");
  });
});
