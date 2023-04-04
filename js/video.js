var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	var vid = document.getElementById("player1"); 
	vid.play();
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
	var vid = document.getElementById("player1"); 
	vid.playbackRate += 0.1;
	console.log("New speed is " + vid.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	var vid = document.getElementById("player1"); 
	newTime = vid.currentTime + 10;
	if (newTime >= vid.duration) {
		vid.currentTime = 0;
	} else {
		vid.currentTime = newTime;
  	}
	console.log("Current time is " + vid.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	var vid = document.getElementById("player1");
	var muteButton = document.getElementById("mute");
	vid.muted = !vid.muted;
	if (vid.muted) {
		muteButton.innerText = "Unmute";
	  } else {
		muteButton.innerText = "Mute";
	  }
});

document.querySelector("#slider").addEventListener("change", function(){
    console.log(this.value);
    var vid = document.getElementById("player1");
	var volumeSlider = document.getElementById("slider");
	var volumeInfo = document.getElementById("volume");
	vid.volume = volumeSlider.value / 100;
	volumeInfo.innerText = volumeSlider.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function(){
    var vid = document.getElementById("player1");
	vid.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function(){
    var vid = document.getElementById("player1");
	vid.classList.remove("oldSchool")
});

