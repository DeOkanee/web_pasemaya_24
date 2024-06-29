document.addEventListener('DOMContentLoaded', async function() {
    const imageUrl = './img/pertama.jpg';
    await Swal.fire({
        imageUrl: imageUrl,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        title: "Om Swastyastu",
        text: "PASEMAYA BEM FDA 2024 \n\n Kesempatan terbuka untuk semua! Daftarkan dirimu sekarang dan tunjukkan bakatmu!",
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
