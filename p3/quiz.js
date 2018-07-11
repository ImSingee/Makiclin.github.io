$(document).ready(function(){

// LOGIC FOR SHOWING THE NEXT question ON CLICK


  $('.q1 a').on('click', function(){
      $('.q1').removeClass('showquestion');
      $('.q2').addClass('showquestion');
  });

  $('.q2 a').on('click', function(){
      $('.q2').removeClass('showquestion');
      $('.q3').addClass('showquestion');
  });

  $('.q3 a').on('click', function(){
      $('.q3').removeClass('showquestion');
      $('.q4').addClass('showquestion');
  });

  $('.q4 a').on('click', function(){
      $('.q4').removeClass('showquestion');
      $('.q5').addClass('showquestion');
  });

  $('.q5 a').on('click', function(){
      $('.q5').removeClass('showquestion');
      $('.q6').addClass('showquestion');
  });

  $('.q6 a').on('click', function(){
      $('.q6').removeClass('showquestion');
  });



// LOGIC for ADDING CLASSES BASED ON ANSWERS

// q 1

$('.q1 .a1').on('click', function(){
    $('.q1').addClass('answered1');
});

$('.q1 .a2').on('click', function(){
    $('.q1').addClass('answered2');
});

// q 2

$('.q2 .a1').on('click', function(){
    $('.q2').addClass('answered1');
});

$('.q2 .a2').on('click', function(){
    $('.q2').addClass('answered2');
});

$('.q2 .a3').on('click', function(){
    $('.q2').addClass('answered3');
});

$('.q2 .a4').on('click', function(){
    $('.q2').addClass('answered4');
});

$('.q2 .a5').on('click', function(){
    $('.q2').addClass('answered5');
});

// q 3

$('.q3 .a1').on('click', function(){
    $('.q3').addClass('answered1');
});

$('.q3 .a2').on('click', function(){
    $('.q3').addClass('answered2');
});

// q 4

$('.q4 .a1').on('click', function(){
    $('.q4').addClass('answered1');
});

$('.q4 .a2').on('click', function(){
    $('.q4').addClass('answered2');
});

// q 5

$('.q5 .a1').on('click', function(){
    $('.q5').addClass('answered1');
});

$('.q5 .a2').on('click', function(){
    $('.q5').addClass('answered2');
});

// q 6

$('.q6 .a1').on('click', function(){
    $('.q6').addClass('answered1');
});

$('.q6 .a2').on('click', function(){
    $('.q6').addClass('answered2');
});



// LOGIC FOR CHANGING "PROFILE" HTML BASED ON ANSWERS
$('body').on('click', function(){

if ( $('.q1').hasClass( "answered1" ) ) {
$(".data1").html("actively, self-curate,");
}

if ( $('.q1').hasClass( "answered2" ) ) {
$(".data1").html("weak-minded，Like to try new things");
}

if ( $('.q2').hasClass( "answered1" ) ) {
$(".data2").html("energetic, outgoing");
}

if ( $('.q2').hasClass( "answered2" ) ) {
$(".data2").html("smart, self-noticed");
}

if ( $('.q2').hasClass( "answered3" ) ) {
$(".data2").html("hardworking, emotionally");
}

if ( $('.q2').hasClass( "answered4" ) ) {
$(".data2").html("gentle, low self-esteem");
}

if ( $('.q2').hasClass( "answered5" ) ) {
$(".data2").html("violent, self-esteem");
}

if ( $('.q3').hasClass( "answered1" ) ) {
$(".data3").html("Explorer, Getting bored easily");
}

if ( $('.q3').hasClass( "answered2" ) ) {
$(".data3").html("Nostalgic, Strong logic");
}

if ( $('.q4').hasClass( "answered1" ) ) {
$(".data4").html("Good at being alone, paying attention to privacy.");
}

if ( $('.q4').hasClass( "answered2" ) ) {
$(".data4").html("Like sharing, vigilance");
}

if ( $('.q5').hasClass( "answered1" ) ) {
$(".data5").html("Outgoing, Trend Follower");
}

if ( $('.q5').hasClass( "answered2" ) ) {
$(".data5").html("Like to be unique, introvert");
}

});

// closing jquery
});
