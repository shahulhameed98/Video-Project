const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const playPause = document.querySelector(".playpause");

btn.addEventListener("click", function () {
	if (playPause.classList.contains("fa-pause-circle")) {
		playPause.classList.add("fa-play-circle");
		playPause.classList.remove("fa-pause-circle");

		video.pause();
	} else {
		playPause.classList.add("fa-pause-circle");
		playPause.classList.remove("fa-play-circle");
		video.play();
	}
});

// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
	preloader.classList.add("hide-preloader");
});
