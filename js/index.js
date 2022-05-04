'use strict';

function openLiveMeeting() {
  window.open(COMMON.zoomLink, '_blank');
}

function playMusic() {
  window.document.querySelector('audio').play();
  $('#js-btn-more').hide();
  // $('#js-greeting').hide();
  // $('body').css('background-color', 'black');
  
  $('#js-loader').css('display', 'block');

  setTimeout(function () {
      $('#js-loader').css('display', 'none');
      $('#js-more-pic').css('display', 'block');
    }, 2000);

}

function stopMusic() {
  window.document.querySelector('audio').pause();
  $('#js-btn-mute').hide();
}

function toggleFullList() {
  const listLength = $('#js-future-meetings').attr("cnt");

  $('#js-future-meetings').attr("cnt", listLength === "1" ? "0" : "1");
  renderFutureMeetings();
}

function openHelp() {
  $('#js-help').removeClass('hidden');
  $('#js-popup-bg').removeClass('hidden');
}

function closeHelp() {
  $('#js-help').addClass('hidden');
  $('#js-popup-bg').addClass('hidden');
}

function renderMainImage() {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  const isLandscape = width > height;
  const heightFactor = isLandscape ? 0.8 : 0.5;
  const bottomFactor = isLandscape ? '20%' : '40%';
  const greetingTopFactor = isLandscape ? 0.7 : 0.5;
  // console.log("AK: ", width, height)
  $('#js-bottom').css('margin-top', height*greetingTopFactor);
  $('#js-main-img').css('height', height * heightFactor);
  $('#js-landing').css('bottom', bottomFactor);
  
  if (isLandscape && width > 1800) {
    $('#js-mobile-logo').css('margin-left', '10vw');
    $('#js-copy-right').css('margin-left', '10vw');
  }

  if (!isLandscape) {
    $('#js-greeting').css('background-position', 'top right');
    $('#js-greeting').css('background-size', '100%');
    $('#js-mobile-logo').css('width', '180px');
    $('.img_p, .img_l').css('padding', '7% 0');
    $('.img_p, .img_l').css('margin-bottom', '11%');
  }

  if (width < 1600) {
    $('.img_l').css('width', '100%');
    $('.img_p').css('width', '90%');
  }
  const songTitle = Math.random() > 0.5 ? './img/situ.mp3' : './img/madeleine.mp3'
  $('audio').attr('src', songTitle);

}

function handleEvent() {
  $('audio').on({
    play: function() {
      // $('#js-audio').attr('hidden', 'true');
      playMusic();
    }

  });
}

$(_=> {
  renderMainImage();
  // handleEvent();
});
