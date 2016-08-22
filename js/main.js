$(document).ready(function() {	
	/*
  var tag = document.createElement('script');
	tag.src = "http://www.youtube.com/player_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  */
  //$(window).stellar();

  $('.screenshots').slick({
    arrows: false,
    autoplay: true,
    dots: true

  });
});

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('background_yt', {
  	height: 200,
  	width: 200,
  	videoId: "JXtujxT9rzA",
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  var toggleButton = document.getElementById("button_toggle_bg_music");
  toggleButton.addEventListener("click", function() {
    toggleVideo();
  });  
}

function toggleVideo() {
	console.log("toggleVideo()");
	if(player.getPlayerState() == 1) {
		player.pauseVideo();
    document.getElementById("music_button_icon").className = "glyphicon glyphicon-play";  
	} else {
		player.playVideo();
    document.getElementById("music_button_icon").className = "glyphicon glyphicon-pause";  
	}
}

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !done) {
		setTimeout(stopVideo, 6000);
        done = true;
    }
}