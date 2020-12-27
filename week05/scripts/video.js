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

    let freezeBtn = document.getElementById("freezeBtn");
    freezeBtn.addEventListener("mousedown", function() {
        video.pause();
    });
    freezeBtn.addEventListener("mouseup",function() {
        video.play();
    });

    let seekBar = document.getElementById("seekBar");
    seekBar.addEventListener("change", function() {
        let time = video.duration * (seekBar.value / 100);
        video.currentTime = time;
    });
    seekBar.addEventListener("timeupdate", function() {
        let value = (100 / video.duration) * video.currentTime;
        seekBar.value = value
    });

    let volumeCtr1 = document.getElementById("volume");
    volumeCtr1.addEventListener("change", function() {
        video.volume = volumeCtr1.value;
    });
};