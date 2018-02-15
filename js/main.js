$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

  /*Hide menu by default*/
$("#menu").hide();

/*When menu button is clicked, toggle the menu*/
$("#menu-btn").click(function(){
  $("#menu").slideToggle();
});

$(document).ready(function(){
  $('.list').click(function(){
    $(this).find('ul').toggleClass('open');
  });
});

function init() {
  var $listItems = $('#list li');
  var $line = $('#line');

  animateIn();
  addListeners();

  function animateIn() {
    $listItems.each(function(i) {
      this.index = i;
      $(this).velocity({translateX: [i*100+'px', [ 250, 15 ]], opacity: [1, {ease: 'linear', duration: 400}], rotation: '30deg'}, {delay: 1000+(500-(i*100)), duration: 2000, easing: [ 250, 15 ], queue: false});
  	});
     $line.velocity({width: 500}, {duration: 2000, easing: [ 250, 15 ], delay: 1000});
  }

  function addListeners() {
    $listItems.on('mouseenter', over).on('mouseleave', out);
  }
}

$(document).on('ready', init);

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
