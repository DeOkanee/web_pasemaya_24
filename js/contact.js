document
  .getElementById("contact-link-contact-us")
  .addEventListener("click", function () {
    var yunikaLink = document.getElementById("yunika-link");
    var indraLink = document.getElementById("indra-link");
    var aditLink = document.getElementById("adit-link");

    yunikaLink.style.display = "block";
    indraLink.style.display = "block";
    aditLink.style.display = "block";

    setTimeout(function () {
      yunikaLink.style.display = "none";
      indraLink.style.display = "none";
      aditLink.style.display = "none";
    }, 10000); // 10 detik
  });

function changeColor(element) {
  element.style.backgroundColor = "#4CAF50"; // Ubah warna latar menjadi hijau
  return true; // Kembalikan nilai true untuk menjalankan tindakan bawaan dari tautan
}
