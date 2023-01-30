let playBtn = document.querySelector("#play");
let pauseBtn = document.querySelector("#pause");
let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let volumeOn = document.querySelector("#volume");
let volumeOff = document.querySelector("#volume-off");
let volumeBar = document.querySelector("#volume-bar");
let video = document.querySelector(".video-file");
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
	nextBtn.style.opacity = "0.3";
	prevBtn.style.opacity = "1";
	video.src = "./Videos/Markdown syntax Cheat sheet.mp4";
	pauseBtn.style.display = "none";
	playBtn.style.display = "inline";
}
function videoPrev() {
	prevBtn.style.opacity = "0.3";
	nextBtn.style.opacity = "1";
	video.src = "./Videos/Ant-Man and The Wasp Quantumania.mp4";
	pauseBtn.style.display = "none";
	playBtn.style.display = "inline";
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
