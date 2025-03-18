import "./modules/home.css";

const home = {
    init: function() {
        this.cacheDom();
        this.createElements();
        this.addElements();
    },
    cacheDom: function() {
        this.content = document.querySelector("#content");
    },
    createElements: function() {
        this.title = document.createElement("h1");
        this.title.classList.add("restaurant-name");
        this.title.innerText = "la Lourde Oie";

        this.tagline = document.createElement("p");
        this.tagline.classList.add("tagline");
        this.tagline.innerText = "Where tradition meets indulgence.";

        this.homeContainer = document.createElement("div");
        this.homeContainer.classList.add("home-content");

        this.homeContainer.appendChild(this.title);
        this.homeContainer.appendChild(this.tagline);
    },
    addElements: function() {
        this.content.appendChild(this.homeContainer);
    },
};

export default home;