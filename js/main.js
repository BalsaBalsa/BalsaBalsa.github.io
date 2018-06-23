

  window.onload = function () {
    //initialize swiper when document ready
    var mySwiper1 = new Swiper ('.swiper_container_main', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
      autoplay: {
      	delay: 4000
      },
      pagination: {
      	el: '.swiper-pagination',
      	type: 'bullets'
      }
    })

    var mySwiper2 = new Swiper('.swiper_container_news', {
      navigation: {
        nextEl: '.news_next',
        prevEl: '.news_prev',
      },
    });

  };


function initMap() {

	var location = {lat: 44.810558, lng: 20.437128};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: location
	});

	var marker = new google.maps.Marker({
		position: location,
		map: map
	});

}



$( ".header_lang" ).click(function() {
  $( ".lang_hidden" ).slideToggle( "medium");
});

$(".toggler").click(function() {
	$(".toggler_inner").toggleClass("is_active");
	$(".menu").toggle("slide");
	$("body", "html").toggleClass("no_scroll");
})