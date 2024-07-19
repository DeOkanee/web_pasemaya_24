document.addEventListener("DOMContentLoaded", function() {
    const music = document.getElementById("background-music");
    const controlBtn = document.getElementById("music-control");

    // Unmute dan play musik saat halaman dimuat
    music.muted = false; // Mengatur audio agar tidak mute
    music.play().catch(error => {
      // Jika play() gagal, tampilkan pesan error di konsol
      console.log('Autoplay gagal:', error);
    });

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