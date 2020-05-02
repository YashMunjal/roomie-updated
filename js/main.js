
AOS.init({
  duration: 1500,
})

$(document).ready(function () {
  
  $('#login-form').hide();
  $('#login-button').click(function(){
      $('#login-form').show();
  });
  //login-sign up done
  $('.flat-block').hide();
  $('.independent-block').hide();

  $('.prop-one').click(function () {
    $('.prop-one').addClass('prop-selected');

    if ($('.prop-two').hasClass('prop-selected')) {
      $(('.prop-two').removeClass('prop-selected'));
    }
    if ($('.prop-three').hasClass('prop-selected')) {
      $('.prop-three').removeClass('prop-selected');
    }

    $('.independent-block').hide();
    $('.flat-block').hide();
    $('.pg-block').show();
  });

  $('.prop-two').click(function () {
    $('.prop-two').addClass('prop-selected');
    if ($(".prop-one").hasClass('prop-selected')) {
      $('.prop-one').removeClass('prop-selected');
    }
    if ($('.prop-three').hasClass('prop-selected')) {
      $(this).removeClass('prop-selected');
    }
    $('.independent-block').hide();
    $('.pg-block').hide();
    $('.flat-block').show();
  });

  $('.prop-three').click(function () {
    $('.prop-three').addClass('prop-selected');

    if ($(".prop-two").hasClass('prop-selected')) {
      $('.prop-two').removeClass('prop-selected');
    }
    if ($('.prop-one').hasClass('prop-selected')) {
      $(this).removeClass('prop-selected')
    }
    $('.pg-block').hide();
    $('.flat-block').hide();
    $('.independent-block').show();
  });
  

  //prop-uploads
  var fields= new Array('.basic','.owner','.pricing-upload','.amenities');


  $('.next-to-owner').click(function(){
    $('.progress-bar').css("width","25%");
    $(fields[0]).hide();
    $(fields[1]).show();
  });
  $('.next-to-pricing').click(function(){
    $('.progress-bar').css("width","50%");
    $(fields[1]).hide();
    $(fields[2]).show();
  });
  $('.next-to-amenities').click(function(){
    $('.progress-bar').css("width","75%");
    $(fields[2]).hide();
    $(fields[3]).show();
  });
  $('.prev-to-pricing').click(function(){
    $('.progress-bar').css("width","50%");
    $(fields[3]).hide();
    $(fields[2]).show();
  });
  $('.prev-to-owner').click(function(){
    $('.progress-bar').css("width","25%");
    $(fields[2]).hide();
    $(fields[1]).show();
  });
  $('.prev-to-basic').click(function(){
    $('.progress-bar').css("width","0%");
    $(fields[1]).hide();
    $(fields[0]).show();
  });
  $('#final-submit').click(function(){
    $('.progress-bar').css("width","100%");
    $(fields[3]).css("opacity","0");
  });

  $("#loginl").click(function(){
    $("#login").show();
    $("#register").hide();
  });
  $("#registerl").click(function(){
    $("#login").hide();
    $("#register").show();
  });
});

