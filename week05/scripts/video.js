window.onload = function() {
    let video = document.getElementById("myVideo");

    let playBtn = document.getElementById("playBtn");
    playBtn.addEventListener("click", function() {
        video.play();
    });

    let pause = document.getElementById("pauseBtn");
    pauseBtn.addEventListener("click", function() {
        video.pause();
    });
};