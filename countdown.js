const weddingDate = new Date("June 5, 2027 14:00:00").getTime();

setInterval(function() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").innerHTML =
        "💜 " + days + " days until our wedding";

}, 1000);
