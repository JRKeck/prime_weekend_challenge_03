$(document).ready(function() {
  $.ajax({
    url: "/data",
    success: function(data){
      $.each(data, function(i){
              $('.carousel').append('<div class="slide"></div>');//Add a slide to the carousel
              $('.slide').last().append('<h2>'+this.name+'</h2>');//Add h2 name to the newly created slide
              $('.slide').last().append('<div class="description">'+this.desc+'</div>');//Add decription to the newly created slide
              $('.slide').last().append('<div class="shout-out">'+this.shoutout+'</div>');//Add shoutout to the newly created slide
              $('.slide').first().addClass('active');
              $('.carousel-nav .arrow').css("display", "inline-block");//show the dot nav arrows once ajax is complete
              $('ul.nav-dots').append('<li class="dot">&bull;</li>');//Create a nav dot for each slide
              $('.nav-dots .dot').first().addClass('active');
            })
    },
    done: function(){

    }
  })

  $('.arrow.next').click(function() {
    getNextSlide();

  });
    $('.arrow.prev').click(function() {
      getPrevSlide();
  });
});//End DOM Ready

//fn to move to the next slide
function getNextSlide() {
  var currentSlide = $('.slide.active');
  var nextSlide = currentSlide.next();
  var currentDot = $('.dot.active');
  var nextDot = currentDot.next();

  if(nextSlide.length === 0) {
    nextSlide = $('.slide').first();
    nextDot = $('.dot').first();
  }

  currentSlide.fadeOut(600).removeClass('active');
  nextSlide.fadeIn(600).addClass('active');

  currentDot.removeClass('active');
  nextDot.addClass('active');
}

//fn to move to the prev slide
function getPrevSlide() {
  var currentSlide = $('.slide.active');
  var prevSlide = currentSlide.prev();

  var currentDot = $('.dot.active');
  var prevDot = currentDot.prev();

  if(prevSlide.length === 0) {
    prevSlide = $('.slide').last();
    prevDot = $('.dot').last();
  }

  currentSlide.fadeOut(600).removeClass('active');
  prevSlide.fadeIn(600).addClass('active');

  currentDot.removeClass('active');
  prevDot.addClass('active');
}
