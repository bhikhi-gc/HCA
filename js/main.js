(function($) {
  
  "use strict";

  //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navigation").removeClass("sticky");
        } else{
            $(".navigation").addClass("sticky");
        }
    });
    
    /**
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
        // Active link switching
        $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();
        console.log('Scrollbar: ',scrollbarLocation);
        //var offsetVal = {i:165};
        scrollLink.each(function() {
          var sectionOffset = $(this).offset().top - 73;
          console.log('Section: ', sectionOffset);
          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        });
    });
  
    
    //===== close navbar-collapse when a  clicked
    
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    
    //===== Mobile Menu
    
    $(".navbar-toggler").on('click', function(){
        $(this).toggleClass("active");
    });
    
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });
 **/

    
    /* 
   & wow js
   ========================================================================== */
    //Initiat WOW JS
    new WOW().init();


/* 
   CounterUp
   ========================================================================== */
    $('.counter').counterUp({
      time: 1000
    });

/* 
   MixitUp
   ========================================================================== */
  // $('#sectors-services').mixItUp();

    // callback to set active class based on hash
    function hashChange() {
      var id = window.location.hash
      $(id).addClass('active')
    }
    // bind the callback to hashchange and window.onload
    $(window).on('hashchange', hashChange)
    $(hashChange)

    

/* 
   Touch Owl Carousel
   ========================================================================== 
    var owl = $(".touch-slider");
    owl.owlCarousel({
      navigation: false,
      pagination: true,
      slideSpeed: 1000,
      stopOnHover: true,
      autoPlay: true,
      items: 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall: [1024, 2],
      itemsTablet: [600, 1],
      itemsMobile: [479, 1]
    });

    $('.touch-slider').find('.owl-prev').html('<i class="fa fa-chevron-left"></i>');
    $('.touch-slider').find('.owl-next').html('<i class="fa fa-chevron-right"></i>');*/

/* 
   Sticky Nav
   ========================================================================== */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
        /**Adjust team - founder position on scroll**/
        if($(window).scrollTop() > 1200)
            $('#teamFounder').css('position', 'absolute');
        if($(window).scrollTop() < 1200)
            $('#teamFounder').css('position', 'fixed');
    });

/* 
   VIDEO POP-UP
   ========================================================================== */
    $('.video-popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });


  /* 
   SMOOTH SCROLL
   ========================================================================== */
    var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';

    $('a.scrollto').on('bind', 'click.smoothscroll', function (event) {
        event.preventDefault();
        var target = this.hash;
        
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });
    });

/* 
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

/* Nivo Lightbox
  ========================================================   
   $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
  });
*/

/* stellar js
  ========================================================*/
  $.stellar({
    horizontalScrolling: true,
    verticalOffset: 40,
    responsive: true
  });

/* 
   Page Loader
   ========================================================================== */
  $('#loader').fadeOut();

}(jQuery));

/**Map - Deactivating mouse scroll zoom - Activate on click**/
$('#map')
  .click(function(){
      $(this).find('iframe').addClass('clicked')})
  .mouseleave(function(){
      $(this).find('iframe').removeClass('clicked')});
/** Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
**/
/**OWL carousel banner**/
jQuery(document).ready(function($){
$('#carouselBanner').owlCarousel({
    items:1,
    loop: true,
    autoplay:true,
    autoplayTimeout:7000,
    smartSpeed: 1000,
    lazyLoad: true, 
    navigation:true,
    navigationText: [
      "<img src='img/icons/chevron-left.png' class='icon-img'>",
      "<img src='img/icons/chevron-right.png' class='icon-img'>"
    ]
  });
});

/**Quick Enquiry modal**/
var modal = document.getElementById('id01');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

// Services dropdown click listener
  function linkAudit(){
    window.location.href = "./sectors-services.html#assurance-audit"
  };
  function linkTax(){
    window.location.href = "./sectors-services.html#taxation"
  };
  function linkInterTax(){
    window.location.href = "./sectors-services.html#international-taxation"
  };
  function linkLegalServices(){
    window.location.href = "./sectors-services.html#legal-services"
  };
  function linkMngtConsultancy(){
    window.location.href = "./sectors-services.html#management-consultancy"
  };
  function linkRoc(){
    window.location.href = "./sectors-services.html#roc"
  };
  function linkAncillary(){
    window.location.href = "./sectors-services.html#ancillary-other-services"
  };

/**Footer - Current year**/
document.getElementById("year").innerHTML = new Date().getFullYear();