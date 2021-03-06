$(document).ready(function() {
  $.ajax({
    url: "/data",
    success: function(data){
      $.each(data, function(i){
              $('.carousel').append('<div class="slide" data-id="'+i+'"><div class="inner row"></div></div>');//Add a slide to the carousel
              $('.slide .inner').last().append('<h2>'+this.name+'</h2>');//Add h2 name to the newly created slide
              $('.slide .inner').last().append('<div class="description col-sm-6">'+this.desc+'</div>');//Add decription to the newly created slide
              $('.slide .inner').last().append('<div class="shout-out col-sm-6">'+this.shoutout+'</div>');
              $('.slide').first().addClass('active');
              $('.carousel-nav .arrow').css("display", "inline-block");//show the dot nav arrows once ajax is complete
              $('ul.nav-dots').append('<li class="dot" data-id="'+i+'">&bull;</li>');//Create a nav dot for each slide
              $('.nav-dots .dot').first().addClass('active');
            })
    },
  })//End ajax call


  $('.arrow.next').on('click', function() {
    getNextSlide();

  });
  $('.arrow.prev').on('click', function() {
    getPrevSlide();
  });
  $('body').on('click', 'li.dot', function() {
    var dotNum = $(this).data("id");
    var currentSlide = $('.slide.active');
    var nextSlide = $('[data-id="'+ dotNum +'"]');
    var currentDot = $('.dot.active');

    currentSlide.fadeOut(carouselOption.speed).removeClass('active');
    nextSlide.fadeIn(carouselOption.speed).addClass('active'); //this will add active class to both slide and the nav dot

    currentDot.removeClass('active');

    moveBackground();
  });

});//End DOM Ready
//Hide caosel until we can caluculate a height and apply it.
//$('.carousel').hide();
//set carousel options
var carouselOption = {
  speed : 400,
  backgroundIncrement : 10,
  backgroundPosition : 0
};


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

  currentSlide.fadeOut(carouselOption.speed).removeClass('active');
  nextSlide.fadeIn(carouselOption.speed).addClass('active');

  currentDot.removeClass('active');
  nextDot.addClass('active');

  moveBackground();

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

  currentSlide.fadeOut(carouselOption.speed).removeClass('active');
  prevSlide.fadeIn(carouselOption.speed).addClass('active');

  currentDot.removeClass('active');
  prevDot.addClass('active');

  moveBackground();
}

//Move background image
function moveBackground() {
  carouselOption.backgroundPosition += carouselOption.backgroundIncrement;
  $('.main').css( 'background-position' , carouselOption.backgroundPosition + '% 0%' );
}
