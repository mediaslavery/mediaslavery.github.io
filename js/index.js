// Video pop-up //
$(document).ready(function() {
  $('.video-gallery').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'iframe',
  // other options
     gallery:{
    enabled:true
  }
});
});

// Web pop-up//
$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});
