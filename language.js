function setLanguage(language) {

    if(language === "en") {

    document.getElementById("welcome-title").innerHTML =
        "Welcome to our wedding website.";

    document.getElementById("welcome-text").innerHTML =
        "We are excited to celebrate this special day with our family and friends.";

    document.getElementById("story-title").innerHTML =
        "Our Story ❤︎";

    document.getElementById("venue-title").innerHTML =
        "Venue";

    document.getElementById("details-title").innerHTML =
        "Important Information";

    document.getElementById("accommodation-title").innerHTML =
        "Accommodation";

    document.getElementById("gifts-title").innerHTML =
        "Gifts";

    document.getElementById("faq-title").innerHTML =
        "Frequently Asked Questions";

    document.getElementById("photos-title").innerHTML =
        "Wedding Photos";

    }

    if(language === "af") {

        document.getElementById("welcome-title").innerHTML =
            "Welkom by ons trouwebwerf.";

        document.getElementById("welcome-text").innerHTML =
            "Ons is opgewonde om hierdie besondere dag saam met ons familie en vriende te vier.";

    }

}
