$( document ).ready(function() {
    if ($(window).width() <= '768'){
      $('.nav-item').hide();
      $('.nav').mouseout(function(){
      $(this).children('.nav-item').hide()
});
      $('.nav').mouseover(function(){
      $(this).children('.nav-item').show()
});
    }
    $("#map").googleMap({
      zoom: 8, // Initial zoom level (optional)
      center: [55.799989, 37.461509], // Map center (optional)
      type: "ROADMAP" // Map type (optional)
    });
    $("#map").addMarker({
      coords: [55.7998958, 37.4711271],
      icon: 'img/map-marker.png', // Icon URL,
      title: 'Marker n°1', // Title
      text:  '<p><b>ул.Академика Курчатова, д.1 стр.78, Москва, Россия, 123098</b></p>'

    });
    $("#map").addMarker({
      coords: [55.799989, 37.460000],
      icon: 'img/un.png',       
    });
     

     $('.go_to').click( function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
	    return false;
    });
     $(".controls a").click(function(){
     	event.preventDefault();
	var href = $(this).attr("href");
	$(this).parent().parent().parent().css('background-image','url(' + href + ')');
	
});
     $('#next').click( function(){
     	updateImages()
     	if($('#slider .active').next().hasClass("slide")){
     		$("#slider .active").hide().next().fadeIn(1000);
     	$("#slider .active").removeClass("active").next().addClass("active");
     	$('#prev').show();
     	}else{
     	$(this).hide()
     	}
     	
     });
     $('#prev').click( function(){
     	if($('#slider .active').prev().hasClass("slide")){
     		$("#slider .active").hide().prev().fadeIn(1000);
     	$("#slider .active").removeClass("active").prev().addClass("active");
     	$('#next').show();
     	}else{
     	$(this).hide()
     	}
     	
     });

var endWidth = $(".before-after").width() ;
var middleWidth = $(".before-after").width() / 2 ;
var clblh = $(".results").width() / '1.11';
$(".client-block").height(clblh);


$(window).resize(function(){

var clblh = $(".results").width() / '1.11';
$(".client-block").height(clblh);
});

$(window).resize(function(){
	var endWidth = $(".before-after").width() ;
	var middleWidth = $(".before-after").width() / 2 ;

     dragMe         = $(".dragme");
  beforeAfter    = $(".before-after");
  viewAfter      = $(".view-after");
        
  Draggable.create(dragMe, {
    type:"left",
    bounds: beforeAfter,
    onDrag:updateImages
  });
                  
  function updateImages(){
    TweenLite.set(viewAfter, {width: dragMe.css("left") });   //or this.x if only dragging
  }
         
  //Intro Animation
  animateTo(middleWidth);
         
  //Externall nav
  $(".to-start").on("click", function(){
    animateTo(0);
  });
         
  $(".to-middle").on("click", function(){
    animateTo(middleWidth);  
  });
         
  $(".to-end").on("click", function(){
    animateTo(endWidth);
  });
         
  function animateTo(_left){
    TweenLite.to( dragMe, 1, {left: _left, onUpdate: updateImages });
  }
  
  //V2 Click added
  beforeAfter.on("click", function(event){           
    var eventLeft = event.clientX - beforeAfter.offset().left;
    animateTo(eventLeft);
  });
})
     // dragable
     var dragMe         = $(".dragme");
  var beforeAfter    = $(".before-after");
  var viewAfter      = $(".view-after");
        
  Draggable.create(dragMe, {
    type:"left",
    bounds: beforeAfter,
    onDrag:updateImages
  });
                  
  function updateImages(){
    TweenLite.set(viewAfter, {width: dragMe.css("left") });   //or this.x if only dragging
  }
         
  //Intro Animation
  animateTo(middleWidth);
         
  //Externall nav
  $(".to-start").on("click", function(){
    animateTo(0);
  });
         
  $(".to-middle").on("click", function(){
    animateTo(middleWidth);  
  });
         
  $(".to-end").on("click", function(){
    animateTo(endWidth);
  });
         
  function animateTo(_left){
    TweenLite.to( dragMe, 1, {left: _left, onUpdate: updateImages });
  }
  
  //V2 Click added
  beforeAfter.on("click", function(event){           
    var eventLeft = event.clientX - beforeAfter.offset().left;
    animateTo(eventLeft);
  });
    

});
document.addEventListener('click', function(event) {
    
        if (!event.target.classList.contains('js-ripple')) {
            return;
        }
        
        var rippleBtn = event.target, 
        ink = rippleBtn.querySelector('.ink'), diameter;
    
        if (!ink) {
            // first time clicked => create a new ink element
            ink = document.createElement('i');
            ink.classList.add('ink');
            
            diameter = Math.max(rippleBtn.clientWidth, rippleBtn.clientHeight) - 150;
            ink.style.width = diameter + 'px';
            ink.style.height = diameter + 'px';
            
            // when the animation ends remove el (bind for all vendor prefixes)
            ['animationend', 'webkitAnimationEnd', 'oAnimationEnd', 'MSAnimationEnd'].forEach(function(eventName){
                ink.addEventListener(eventName, function(){
                    ink.parentNode.removeChild(ink)
                });
            });

            rippleBtn.insertBefore(ink, rippleBtn.firstChild);
        } else {
            diameter = ink.clientWidth;
        }
        
        // calculate the click center
    ink.style.top = (event.offsetY - diameter/2) + 'px';
    ink.style.left = (event.offsetX - diameter/2) + 'px';
        
        ink.classList.remove('is-animating');
        ink.width = ink.clientWidth + 'px';
        ink.classList.add('is-animating');
    });
$(document).ready(function(){
    $("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
            
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   alert("Ваше сообщение отпрвлено!");
               }
            });
    });
});
    $(document).ready(function(){
    $("#form2").submit(function() { //устанавливаем событие отправки для формы с id=form
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   alert("Ваше сообщение отпрвлено!");
               }
            });
    });
});