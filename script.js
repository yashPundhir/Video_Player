let videos = [
	{
		endTime: "02 : 18",
		progressMaxValue: 138,
		src: "./Videos/Ant-Man and The Wasp Quantumania.mp4",
	},
	{
		endTime: "00 : 15",
		progressMaxValue: 15,
		src: "./Videos/SHARK-ira.mp4",
	},
	{
		endTime: "00 : 11",
		progressMaxValue: 11,
		src: "./Videos/DancingBear.mp4",
	},
];
let index = 0;
let playBtn = document.querySelector("#play");
let pauseBtn = document.querySelector("#pause");
let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let volumeOn = document.querySelector("#volume-on");
let volumeOff = document.querySelector("#volume-off");
let volumeBar = document.querySelector("#volume-bar");
let video = document.querySelector(".video-file");
let progress = document.querySelector("#progress");
let endTime = document.querySelector(".end-time");
let currentTime = document.querySelector(".current-time");
function videoPlay() {
	playBtn.style.display = "none";
	pauseBtn.style.display = "inline";
	pauseBtn.style.marginLeft = "-5px";
	nextBtn.style.marginLeft = "5px";
	video.play();
}
function videoPause() {
	pauseBtn.style.display = "none";
	playBtn.style.display = "inline";
	playBtn.style.marginLeft = "0px";
	nextBtn.style.marginLeft = "0px";
	video.pause();
}
function videoNext() {
	if (index < 2) {
		if (index === 1) {
			nextBtn.style.opacity = "0.3";
			prevBtn.style.opacity = "1";
		}
		index = index + 1;
		video.src = videos[index].src;
		endTime.textContent = videos[index].endTime;
		progress.max = videos[index].progressMaxValue;
		pauseBtn.style.display = "none";
		playBtn.style.display = "inline";
		progress.value = 0;
		currentTime.textContent = `00 : 00`;
	}
}
function videoPrev() {
	if (index > 0) {
		if (index === 1) {
			prevBtn.style.opacity = "0.3";
			nextBtn.style.opacity = "1";
		}
		index = index - 1;
		video.src = videos[index].src;
		endTime.textContent = videos[index].endTime;
		progress.max = videos[index].progressMaxValue;
		pauseBtn.style.display = "none";
		playBtn.style.display = "inline";
		progress.value = 0;
		currentTime.textContent = `00 : 00`;
	}
}
function volumeMute() {
	volumeOn.style.display = "none";
	volumeOff.style.display = "inline";
	volumeOff.style.marginRight = "-20px";
	volumeBar.style.left = "357.5px";
	video.muted = true;
}
function volumeUnmute() {
	volumeOff.style.display = "none";
	volumeOn.style.display = "inline";
	volumeOn.style.marginRight = "0px";
	video.muted = false;
}
setInterval(() => {
	if (video.paused === false) {
		progress.value = String(Math.floor(video.currentTime + 0.6));
		console.log(progress.value);
		//console.log(video.currentTime);
		if (video.currentTime < 10) {
			currentTime.textContent = `00 : 0${Math.floor(video.currentTime + 0.6)}`;
		} else if (video.currentTime >= 10 && video.currentTime < 60) {
			currentTime.textContent = `00 : ${Math.floor(video.currentTime + 0.6)}`;
		} else if (video.currentTime >= 60 && video.currentTime < 120) {
			currentTime.textContent = `01 : ${
				Math.floor(video.currentTime + 0.6) % 60
			}`;
		}
	}
}, 1000);
