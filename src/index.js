import "./styles.css";
import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";



const index = {
    init: function() {
        this.cacheDom();
        this.clearContent();
        home.init();

        this.bindEvents();
    },
    cacheDom: function() {
        this.homeButton = document.querySelector(".home-btn");
        this.menuButton = document.querySelector(".menu-btn");
        this.aboutButton = document.querySelector(".about-btn");

        this.content = document.querySelector("#content");
    },
    bindEvents: function() {
        this.homeButton.addEventListener("click", () => {
            this.clearContent();
            home.init();
        });
        this.menuButton.addEventListener("click", () => {
            this.clearContent();
            menu.init();
        });
        this.aboutButton.addEventListener("click", () => {
            this.clearContent();
            about.init();
        });
    },
    clearContent: function() {
        while (this.content.firstChild) {
            this.content.removeChild(this.content.firstChild);
        }
    },
};

index.init();
