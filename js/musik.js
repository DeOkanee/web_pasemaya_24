document.addEventListener("DOMContentLoaded", function() {
    const music = document.getElementById("background-music");
    const controlBtn = document.getElementById("music-control");

    controlBtn.addEventListener("click", function() {
        if (music.paused) {
            music.play();
            controlBtn.textContent = "⏸️";
        } else {
            music.pause();
            controlBtn.textContent = "▶️";
        }
    });
});
