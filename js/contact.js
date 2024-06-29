document
.getElementById("contact-link-contact-us")
.addEventListener("click", function () {
  var dwiSeptianiLink = document.getElementById("dwi-septiani-link");
  var suryaDanaLink = document.getElementById("surya-dana-link");
  var ediSuastawanLink = document.getElementById("edi-suastawan-link");

  dwiSeptianiLink.style.display = "block";
  suryaDanaLink.style.display = "block";
  ediSuastawanLink.style.display = "block";

  setTimeout(function () {
    dwiSeptianiLink.style.display = "none";
    suryaDanaLink.style.display = "none";
    ediSuastawanLink.style.display = "none";
  }, 10000); // 10 detik
});
//berubah warna saat klk
function changeColor(element) {
element.style.backgroundColor = "#4CAF50"; // Ubah warna latar menjadi hijau
return true; // Kembalikan nilai true untuk menjalankan tindakan bawaan dari tautan
}