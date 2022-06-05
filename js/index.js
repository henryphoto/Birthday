'use strict';

function openLiveMeeting() {
  window.open(COMMON.zoomLink, '_blank');
}

function morePicBanner() {

  $('#js-landing').replaceWith(`
    <div id='js-landing' class='more_intro'>
      <img id='js-main-img' class='more_intro_img' src="./img/capemay.jpg">
    </div>
  `);
}

function playMusic() {
  window.document.querySelector('audio').play();
  $('#js-btn-more').hide();
  $('#js-greeting').hide();
  $('#js-warning').hide();
  // morePicBanner();
  $('#js-main-img').attr('src', './img/capemay_bw.jpg');
  $('#js-main-img').addClass('fi_short');
  // $('#js-greeting').hide();
  // $('body').css('background-color', 'black');
  
  $('#js-loader').css('display', 'block');

  setTimeout(function () {
    $('#js-main-img').attr('src', './img/capemay.jpg');
    $('#js-loader').css('display', 'none');
      $('#js-more-pic').css('display', 'block');
    }, 3000);

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
  
  if (isLandscape && width > 1600) {
    $('#js-logo-wrap').addClass('main_flex');
    // $('#js-mobile-logo').css('margin-left', '10vw');
    // $('#js-copy-right').css('margin-left', '10vw');
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
}

function handleEvent() {;
  const randNum = parseInt((Math.random() * 3), 10);
  let songTitle = './img/situ.mp3';
  console.log("AK: rand", randNum);
  let songTrack = 0;
  const songList = ['./img/callmemaybe.mp3', './img/situ.mp3', './img/madeleine.mp3'];
  songList.sort(() => Math.random() - 0.5);

  $('audio').attr('src', songList[songTrack++]);
console.log("AK: songlist", songList)

  $('audio').on({
    // play: function() {
    //   console.log("AK: here")
    // },

    ended: function() {
      if (songTrack === songList.length) songTrack = 0;
      $('audio').attr('src', songList[songTrack++]);
      window.document.querySelector('audio').play();
      console.log("AK: stop")
    }
  });
}

$(_=> {
  handleEvent();
  renderMainImage();
});
