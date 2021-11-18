var video = document.querySelector("video")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

 document.getElementById('play').addEventListener("click", function() {
	 console.log("Play Video");
	 video.play();
	 document.getElementById('volume').innerHTML = video.volume * 100 + "%";
 });

 document.getElementById('pause').addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.getElementById('slower').addEventListener("click", function() {
	video.playbackRate = video.playbackRate - 0.05;
	console.log("New speed is " + video.playbackRate);
});

document.getElementById('faster').addEventListener("click", function() {
	video.playbackRate = video.playbackRate + 0.05;
	console.log("New speed is " + video.playbackRate);
});

document.getElementById('mute').addEventListener("click", function() {
	if (video.muted === false) {
		video.muted = true;
		document.getElementById('volume').innerHTML = "0%";
		document.getElementById('mute').innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		document.getElementById('volume').innerHTML = "100%";
		document.getElementById('mute').innerHTML = "Mute";
	}
});

document.getElementById('skip').addEventListener("click", function() {
	console.log("Original location " + video.currentTime);
	video.currentTime = video.currentTime + 15;
	video.addEventListener("ended", function() {
		video.currentTime = 0;
		video.pause();
	});
	if (video.currentTime > 67.4) {
		video.currentTime = 0;
		video.pause()
	}
	console.log("New location " +video.currentTime);
	
});

document.getElementById('slider').addEventListener("change", function() {
	video.volume = this.value / 100;
	document.getElementById('volume').innerHTML = video.volume * 100 + "%";
});

document.getElementById('vintage').addEventListener("click", function() {
	document.querySelector('video').classList.add('oldSchool');
});

document.getElementById('orig').addEventListener("click", function() {
	document.querySelector('video').classList.remove('oldSchool');
});
