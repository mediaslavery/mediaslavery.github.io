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
