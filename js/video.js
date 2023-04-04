var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	vid = document.getElementById("player1"); 
	vid.play();
	// Update volume value
	var volumeInfo = document.getElementById("volume");
	var volumePercent = (vid.volume * 100).toFixed(0);
	volumeInfo.innerText = volumePercent + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	var vid = document.getElementById("player1"); 
	vid.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	var vid = document.getElementById("player1"); 
	vid.playbackRate -= 0.1;
	console.log("New speed is " + vid.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	vid = document.getElementById("player1"); 
	vid.playbackRate += 0.1;
	console.log("New speed is " + vid.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	vid = document.getElementById("player1"); 
	newTime = vid.currentTime + 10;
	if (newTime >= vid.duration) {
		vid.currentTime = 0;
	} else {
		vid.currentTime = newTime;
  	}
	console.log("Current time is " + vid.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	vid = document.getElementById("player1");
	var muteButton = document.getElementById("mute");
	vid.muted = !vid.muted;
	if (vid.muted) {
		muteButton.innerText = "Unmute";
		console.log("The video is muted");
	  } else {
		muteButton.innerText = "Mute";
		console.log("The video is unmuted");
	  }
});

document.querySelector("#slider").addEventListener("change", function(){
        console.log(this.value);
        vid = document.getElementById("player1");
	var volumeSlider = document.getElementById("slider");
	var volumeInfo = document.getElementById("volume");
	vid.volume = volumeSlider.value / 100;
	volumeInfo.innerText = volumeSlider.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function(){
        vid = document.getElementById("player1");
	vid.classList.add("oldSchool");
	console.log("Old School style");
	
});

document.querySelector("#orig").addEventListener("click", function(){
        vid = document.getElementById("player1");
	vid.classList.remove("oldSchool")
	console.log("Original style");
});

