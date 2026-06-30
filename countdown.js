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

function updateGalleryButton() {

    const button = document.getElementById("gallery-button");

    if (!button) return;

    if (Date.now() >= galleryDate) {

        button.disabled = false;
        button.innerHTML = "📸 Upload Photos & Videos";
        button.style.cursor = "pointer";
        button.style.opacity = "1";

    } else {

        button.disabled = true;
        button.style.cursor = "not-allowed";
        button.style.opacity = "0.8";

    }
}

updateGalleryButton();
