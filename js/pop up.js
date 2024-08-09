document.addEventListener('DOMContentLoaded', async function() {
    const imageUrl = './img/pertama.jpg';
    await Swal.fire({
        imageUrl: imageUrl,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        title: "Om Swastyastu",
        html: "<b>PASEMAYA BEM FDA 2024</b></br><p>Berbagai lomba terbuka untuk semua! Daftarkan dirimu sekarang dan tunjukkan bakatmu!</p>",
        footer: "Tinggal 2 lomba lagi yang terbuka! Segera daftar sebelum terlambat!",
        confirmButtonText: 'Daftar Sekarang',
    });

    setTimeout(mulai, 900); // Pastikan fungsi 'mulai' didefinisikan
    play(); // Pastikan fungsi 'play' didefinisikan
});

function mulai() {
    // Definisikan logika fungsi 'mulai' di sini
}

function play() {
    // Definisikan logika fungsi 'play' di sini
}