const queryAll = (...args) => document.querySelectorAll(...args);
const queryId = (...args) => document.getElementById(...args);

export const elements = {
    navMenu: queryId("nav-menu"),
    navToggle: queryId("nav-toggle"),
    navClose: queryId("nav-close"),
    navLink: queryAll(".nav__link"),
};
