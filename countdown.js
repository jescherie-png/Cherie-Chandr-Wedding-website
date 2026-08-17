const weddingDate = new Date("June 5, 2027 14:00:00").getTime();

setInterval(function() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").innerHTML =
        "💜 Nog " + days + " dae tot ons troue 💜";

}, 1000);

function openGallery() {
    window.open("YOUR_UPLOAD_LINK", "_blank");
}
// ==========================
// Wedding Gallery
// ==========================

const galleryDate = new Date("June 5, 2027 00:00:00").getTime();

function updateGalleryStatus() {

    const galleryStatus = document.getElementById("gallery-status");

    if (!galleryStatus) return;

    if (Date.now() >= galleryDate) {

        galleryStatus.innerHTML =
            '📸 <strong>Deel julle spesiale oomblikke met ons!</strong><br>' +
            'Skandeer die QR-kode om julle foto\'s en video\'s met ons te deel. 💜';

    } else {

        galleryStatus.innerHTML =
            '📸 <strong>Deel julle spesiale oomblikke met ons!</strong><br>' +
            'Foto- en video-oplaaie open op ons troudag.';

    }
}

updateGalleryStatus();
