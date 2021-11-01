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

    
  function darken_screen(yesno){
    if( yesno == true ){
      document.querySelector('.screen-darken').classList.add('active');
    }
    else if(yesno == false){
      document.querySelector('.screen-darken').classList.remove('active');
    }
  }
  
  function close_offcanvas(){
    darken_screen(false);
    document.querySelector('.mobile-offcanvas.show').classList.remove('show');
    document.body.classList.remove('offcanvas-active');
  }

  function show_offcanvas(offcanvas_id){
    darken_screen(true);
    document.getElementById(offcanvas_id).classList.add('show');
    document.body.classList.add('offcanvas-active');
  }

  document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('[data-trigger]').forEach(function(everyelement){
      
      let offcanvas_id = everyelement.getAttribute('data-trigger');
      
      everyelement.addEventListener('click', function (e) {
        e.preventDefault();
            show_offcanvas(offcanvas_id);
          
      });
    });

    document.querySelectorAll('.btn-close').forEach(function(everybutton){
      
      everybutton.addEventListener('click', function (e) {
        e.preventDefault();
            close_offcanvas();
        });
    });

    document.querySelector('.screen-darken').addEventListener('click', function(event){
      close_offcanvas();
    });
    
    }); 
    /* 
   & wow js
   ========================================================================== */
    //Initiat WOW JS
    new WOW().init();    

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
      /**
        if ($(window).scrollTop() > 200) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }**/
        /**Adjust team - founder position on scroll**/
        if($(window).scrollTop() > 1200)
            $('#teamFounder').css('position', 'absolute');
        if($(window).scrollTop() < 1200)
            $('#teamFounder').css('position', 'fixed');
    });

  /* 
   SMOOTH SCROLL
   ========================================================================== 
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

/* stellar js
  ========================================================
  $.stellar({
    horizontalScrolling: true,
    verticalOffset: 40,
    responsive: true
  });
*/
/* 
   Page Loader
   ========================================================================== */
  //$('#loader').fadeOut();

  // callback to set active class based on hash
    function hashChange() {
      var id = window.location.hash
      $(id).addClass('active')
    }
    // bind the callback to hashchange and window.onload
    $(window).on('hashchange', hashChange)
    $(hashChange)

    /**Map - Deactivating mouse scroll zoom - Activate on click**/
    $('#map')
      .click(function(){
          $(this).find('iframe').addClass('clicked')})
      .mouseleave(function(){
          $(this).find('iframe').removeClass('clicked')});

}(jQuery));



/**OWL carousel banner**/
jQuery(document).ready(function($){
$('#carouselBanner').owlCarousel({
    loop: true,
    autoplay:3000,
    items:1, 
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [979, 1],
    navigation:true,
    navigationText: [
      "<img src='img/icons/chevron-left.png' class='icon-img'>",
      "<img src='img/icons/chevron-right.png' class='icon-img'>"
    ],
    lazyLoad: true,
  });
});

/**Quick Enquiry modal
var modal = document.getElementById('id01');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}**/

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