$(document).ready(function() {
        var s = $("body");
        var heightref = $( window ).height();
        var pos = s.position();
        $(window).scroll(function() {
                var windowpos = $(window).scrollTop();

console.log("window height is" + heightref);
// console.log("body has scrolled" + windowpos);


                      if (windowpos <0.8*heightref) {
$(".submenu2").removeClass("expand");
$(".submenu3").removeClass("expand");
$(".submenu4").removeClass("expand");
$(".openvid" ).show();
$(".menu").removeClass("menushow");
$(".logodiv").removeClass("logoappear");

$(".bg-only1").removeClass("showgradient");
$(".bg-only2").removeClass("showgradient");
$(".bg-only3").removeClass("showgradient");
$(".bg-only4").removeClass("showgradient");
          }

          else if (windowpos >=0.8*heightref & windowpos <1.8*heightref) {
$(".submenu1").addClass("expand");
$(".subm1").addClass("submenuitemhl");
$(".subm2").removeClass("submenuitemhl");
$(".openvid" ).hide();


$(".bg-only1").addClass("showgradient");
$(".menu").addClass("menushow");
$(".logodiv").addClass("logoappear");
          }

          else if (windowpos >1.8*heightref & windowpos <2.8*heightref) {
$(".subm1").removeClass("submenuitemhl");
$(".subm2").addClass("submenuitemhl");
$(".bg-only").removeClass("showgradient");
$(".bg-only1").addClass("showgradient");
$(".bg-only2").removeClass("showgradient");
$(".bg-only3").removeClass("showgradient");
$(".submenu2").removeClass("expand");
$(".submenu3").removeClass("expand");
$(".submenu4").removeClass("expand");
$(".submenu1").addClass("expand");
          }

          else if (windowpos >=2.8*heightref & windowpos <3.8*heightref) {
$(".submenu1").removeClass("expand");
$(".submenu2").addClass("expand");
$(".bg-only2").addClass("showgradient");
$(".subm3").addClass("submenuitemhl");
$(".subm4").removeClass("submenuitemhl");
          }

          else if (windowpos >=3.8*heightref & windowpos <4.8*heightref) {
$(".subm4").addClass("submenuitemhl");
$(".subm3").removeClass("submenuitemhl");
$(".submenu3").removeClass("expand");
$(".submenu4").removeClass("expand");
$(".bg-only1").removeClass("showgradient");
$(".bg-only2").addClass("showgradient");
$(".bg-only3").removeClass("showgradient");
$(".bg-only4").removeClass("showgradient");
$(".submenu2").addClass("expand");
          }


          else if (windowpos >=4.8*heightref & windowpos <5.8*heightref) {
$(".submenu3").addClass("expand");
$(".submenu2").removeClass("expand");
$(".bg-only3").addClass("showgradient");
$(".bg-only1").removeClass("showgradient");
$(".bg-only2").removeClass("showgradient");
$(".bg-only4").removeClass("showgradient");
$(".subm5").addClass("submenuitemhl");
$(".subm6").removeClass("submenuitemhl");
$(".submenu2").removeClass("expand");

          }

          else if (windowpos >=5.8*heightref & windowpos <6.8*heightref) {
$(".subm6").addClass("submenuitemhl");
$(".subm5").removeClass("submenuitemhl");
$(".submenu4").removeClass("expandfuther")
$(".submenu2").removeClass("expand")
$(".submenu3").addClass("expand")
$(".bg-only3").addClass("showgradient");
$(".bg-only1").removeClass("showgradient");
$(".bg-only2").removeClass("showgradient");
$(".bg-only4").removeClass("showgradient");
$(".placeboicon").removeClass("placeboicondark");
$(".refreshicon").removeClass("refreshicondark");
$(".absenticon").removeClass("absenticondark");
$(".futureicon").removeClass("futureicondark");
$("a").removeClass("menufuturetext");
$(".submenuitem").removeClass("menufuturetext");
$(".logo").removeClass("futureborder");
          }

          else if (windowpos >=6.8*heightref & windowpos <7.8*heightref) {
$(".submenu4").addClass("expandfuther");
$(".submenu3").removeClass("expand");
$(".submenu2").removeClass("expand")
$(".submenu1").removeClass("expand")
$("a").addClass("menufuturetext");
$(".submenuitem").addClass("menufuturetext");
$(".logo").addClass("futureborder");

$(".bg-only1").removeClass("showgradient");
$(".bg-only3").removeClass("showgradient");
$(".bg-only2").removeClass("showgradient");
$(".bg-only4").addClass("showgradient");

$(".placeboicon").addClass("placeboicondark");
$(".refreshicon").addClass("refreshicondark");
$(".absenticon").addClass("absenticondark");
$(".futureicon").addClass("futureicondark");

$(".subm7").addClass("submenuitemhld");
$(".subm8").removeClass("submenuitemhld");
$(".subm9").removeClass("submenuitemhld");

          }
          else if (windowpos >=7.8*heightref & windowpos <8.8*heightref) {
$(".subm8").addClass("submenuitemhld");
$(".subm7").removeClass("submenuitemhld");
$(".subm9").removeClass("submenuitemhld");

          }

          else if (windowpos >=8.8*heightref & windowpos <9.8*heightref) {
$(".subm9").addClass("submenuitemhld");
$(".subm7").removeClass("submenuitemhld");
$(".subm8").removeClass("submenuitemhld");
$(".menu").addClass("menushow");
          }

          else if (windowpos >=9.8*heightref & windowpos <10.8*heightref) {
$(".menu").removeClass("menushow");
          }

})



              });
