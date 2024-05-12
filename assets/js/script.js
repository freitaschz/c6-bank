import "./gsap.js";
import { elements } from "./variables.js";

if (elements.navToggle) {
    elements.navToggle.addEventListener("click", () => {
        elements.navMenu.classList.add("show-menu");
    });
}

if (elements.navClose) {
    elements.navClose.addEventListener("click", () => {
        elements.navMenu.classList.remove("show-menu");
    });
}

function linkAction() {
    elements.navMenu.classList.remove("show-menu");
}

function scrollHeader() {
    const header = document.getElementById("header");
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".footer__button");
    const dataSections = document.querySelectorAll(".footer__data");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const target = this.getAttribute("data-target");
            const targetSection = document.querySelector(target);

            buttons.forEach((btn) => btn.classList.remove("active"));
            dataSections.forEach((el) => (el.style.display = "none"));

            this.classList.add("active");
            targetSection.style.display = "grid";
        });
    });
});

elements.navLink.forEach((el) => el.addEventListener("click", linkAction));

window.addEventListener("scroll", scrollHeader);
