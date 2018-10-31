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

// POPUP VIDEO WITH INSTAGRAM
const markup = `<div class="mfp-iframe-container">
     <div class="mfp-close"></div>
     <iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>
   </div>`;

$('.popup-instagram-mf').magnificPopup({
  type: iframe,
  iframe: {
    markup,
    patterns: {
      instagram: {
        index: 'instagram.com',
        id: url => {
          const m = url.match(/(?:https?:\/\/(?:www\.)?)?instagram\.com\/p\/(\w+)/);
          if (!m || !m[1]) {
            return null;
          }

          return m[1];
        },
        src: '//instagram.com/p/%id%/embed/',
      },
      ...
    },
  },
  ...
}); // END INSTAGRAM MAGNIFIC POPUP
