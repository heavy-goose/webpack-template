import "./modules/about.css";

const about = {
    init: function() {
        this.cacheDom();
        this.createElements();
        this.addElements();
    },
    cacheDom: function() {
        this.content = document.querySelector("#content");
    },
    createElements: function() {
        this.aboutContainer = document.createElement("div");
        this.aboutContainer.classList.add("about-content");

        this.aboutContainer.innerHTML =
            `<p class="about-statement">
                We believe dining is a quiet conversation between tradition and imagination.
                Rooted in heritage yet shaped by creativity, our dishes celebrate rich flavors, fine ingredients,
                and the simple joy of a well-prepared meal.
                <br>
                Every detail is considered,
                yet nothing is rushed—just good food, good company, and a moment to savor.
            </p>

            <p class="about-address">La Lourde Oie</p>
            <p class="about-details">12 Rue des Oies Dorées, A City Near You</p>
            <p class="about-details">☎ +99 1 23 45 67 89</p>
            <p class="about-details">reservations@lalourdeoie.com</p>
            <p class="about-details about-times">Open: Tues - Sun, 5:00 PM - 11:00 PM</p>`;

    },
    addElements: function() {
        this.content.appendChild(this.aboutContainer);
    },
};

export default about;