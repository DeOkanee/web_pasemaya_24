// Dapatkan elemen modal
var imgModal = document.getElementById("imgModal");

// Dapatkan elemen gambar dalam modal
var modalImg = document.getElementById("modalImg");

// Dapatkan elemen span untuk menutup modal
var imgClose = document.getElementsByClassName("img-close")[0];

// Dapatkan elemen caption
var imgCaption = document.getElementById("imgCaption");

// Tambahkan event listener ke semua gambar dalam .lomba-list
var images = document.querySelectorAll('.lomba-list img');
images.forEach(function(image) {
  image.addEventListener('click', function() {
    imgModal.style.display = "block";
    modalImg.src = this.src;
    imgCaption.innerHTML = this.nextElementSibling.querySelector('h2').innerHTML;
  });
});

// Tambahkan event listener ke span untuk menutup modal
imgClose.addEventListener('click', function() {
  imgModal.style.display = "none";
});
