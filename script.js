const rsvpDeadline = new Date("2027-03-15T23:59:59");

if (new Date() > rsvpDeadline) {

    document.getElementById("rsvp-form").style.display = "none";

    document.getElementById("rsvp-closed").style.display = "block";

    document.getElementById("rsvp-closed").innerHTML =
        "RSVP's is nou gesluit.";

}

/* ==========================
   RSVP Guest Search
========================== */

const searchInput = document.getElementById("rsvp-name");
const resultsBox = document.getElementById("guest-search-results");

const guestIdField = document.getElementById("guest-id");
const familyGroupField = document.getElementById("family-group");
const mainContactField = document.getElementById("main-contact");

searchInput.addEventListener("input", function () {

    const search = searchInput.value.trim().toLowerCase();

    resultsBox.innerHTML = "";

    if (search.length < 2) {
        resultsBox.style.display = "none";
        return;
    }
    const matches = guestList.filter(guest =>
    guest.firstName.toLowerCase().includes(search) ||
    guest.surname.toLowerCase().includes(search)
);

if (matches.length === 0) {
    resultsBox.style.display = "none";
    return;
}

resultsBox.style.display = "block";

    matches.forEach(guest => {

    const result = document.createElement("div");

    result.className = "guest-result";

    result.textContent = `${guest.firstName} ${guest.surname}`;

    resultsBox.appendChild(result);

    result.addEventListener("click", function () {

    searchInput.value = `${guest.firstName} ${guest.surname}`;

    guestIdField.value = guest.id;

    familyGroupField.value = guest.familyGroup;

    mainContactField.value = guest.mainContact;

       const familyMembers = guestList.filter(
    member => member.familyGroup === guest.familyGroup
);

const familyBox = document.getElementById("family-members");

const adultContainer = document.getElementById("adult-rsvp-container");

familyBox.innerHTML = "<h4>Your Household</h4>";

adultContainer.style.display = "block";
adultContainer.innerHTML = "<h4>Volwasse Gaste</h4>";

familyMembers.forEach(member => {

    familyBox.innerHTML += `
        <div class="family-member">
            ${member.firstName} ${member.surname}
        </div>
    `;

});

adultContainer.innerHTML = "<h4>Volwasse Gaste</h4>";

familyMembers.forEach(member => {

    const adultDiv = document.createElement("div");
    adultDiv.className = "adult-rsvp";

    adultDiv.innerHTML = `
        <label>${member.firstName} ${member.surname}</label>

        <div class="adult-options">

            <label>
                <input
                    type="radio"
                    name="adult_${member.id}"
                    value="Yes"
                    checked>
                Sal bywoon
            </label>

            <label>
                <input
                    type="radio"
                    name="adult_${member.id}"
                    value="No">
                Sal nie bywoon nie
            </label>

        </div>
    `;

    adultContainer.appendChild(adultDiv);

});
       
    resultsBox.innerHTML = "";
    resultsBox.style.display = "none";

});
});
});
document.getElementById("rsvp-form").addEventListener("submit", function (event) {

    if (mainContactField.value !== "true") {

        event.preventDefault();

        alert("Only the main contact for each family may submit the RSVP.");

    }

});

