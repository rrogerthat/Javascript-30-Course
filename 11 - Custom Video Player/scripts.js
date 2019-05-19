// Get our elements 
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]'); //returns a NodeList that's not an array but accepts forEach method.
const ranges = player.querySelectorAll('.player__slider');

// Build our function
function togglePlay() {
    const method = video.paused ? 'play' : 'pause'; //video.play() or video.pause()
    video[method]();    //use brackets instead of dot notation because 'method' is a variable
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';  //this is bound to the video. Icons copied over.
    toggle.textContent = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    // console.log(this.value);
    // console.log(this.name);
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}
 
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}


// Hook up the event listeners
video.onclick = togglePlay; //instead of using 'addEventListener' (latter is preferred as you can have more than 1 event handler with better error handling)
video.onplay = updateButton;
video.onpause = updateButton;
video.ontimeupdate = handleProgress;    //when playback position has changed, run function.

toggle.onclick = togglePlay;
skipButtons.forEach(button => button.addEventListener('click', skip));  
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));  //real time update instead of just when letting go of click

let mousedown = false;
progress.onclick = scrub;
progress.onmousemove = (e) => {  //change video's current time only when 'onmousemove' && 'onmousedown'.
    mousedown && scrub(e);  //scrub function needs 'e' to be passed in.
};
progress.onmousedown = () => mousedown = true;
progress.onmouseup = () => mousedown = false;