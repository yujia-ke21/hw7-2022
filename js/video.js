var video = document.getElementById("player1");
var volumeInfo = document.getElementById("volume");
var volumePercent = (video.volume * 100).toFixed(0);

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false; 
	video.loop = false; 


});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

	// update volume value
	volumeInfo.innerHTML = volumePercent + '%';

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.1;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.1;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	newTime = video.currentTime + 10;
	if (newTime >= video.duration){
		video.currentTime = 0;
	} else {
		video.currentTime = newTime;
	}
	console.log("Current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	var muteBtn = document.getElementById("mute");
	if (video.muted) {
    video.muted = false;
    muteBtn.innerHTML = "Mute";
	volumeSpan.innerHTML = volumePercent + '%';
	console.log("The video is unmuted");
 	 } else {
    video.muted = true;
    muteBtn.innerHTML = "Unmute";
	volumeSpan.innerHTML = '0%';
	console.log("The video is muted");
  }
});

document.querySelector("#slider").addEventListener("change", function() {
	var volumeSlider = document.getElementById("slider");
	video.volume = volumeSlider.value / 100;
	volumeInfo.innerHTML = this.value + '%';
	console.log(this.value);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Old School style");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original style");
});