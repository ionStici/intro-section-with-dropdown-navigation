const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".nav__close-btn");

const menuBg = document.querySelector(".nav__bg");
const nav = document.querySelector(".nav");

const featuresBtn = document.querySelector(".features-btn");
const companyBtn = document.querySelector(".company-btn");

const featuresArrow = document.querySelector(".nav__features-arrow");
const companyArrow = document.querySelector(".nav__company-arrow");

const subNav = document.querySelector(".sub-nav");
const secondSubNav = document.querySelector(".second-sub-nav");

let featuresNavStatus = "closed";
let companyNavStatus = "closed";
let mainNavStatus = "closed";

window.addEventListener("resize", function (e) {
    if (e.currentTarget.innerWidth < 1010) {
        nav.style.right = "-240px";
        menuBg.style.opacity = "0";
        menuBg.style.visibility = "hidden";
        menuBg.style.pointerEvents = "none";
    } else {
        subNav.style.height = "160px";
        secondSubNav.style.height = "128px";
    }
});

const openSubNav = function (nav, featureArrow, companyArrow, height) {
    if ((featureArrow ? featuresNavStatus : companyNavStatus) === "closed") {
        nav.style.transition = "height 0.15s, opacity 0.25s, visibility 0.25s";
        nav.style.height = `${height}px`;
        nav.style.opacity = "1";
        nav.style.visibility = "visible";
        nav.style.pointerEvenets = "revert";
        nav.style.position = "revert";

        if (featureArrow)
            featureArrow.setAttribute("src", "./images/icon-arrow-up.svg");
        if (companyArrow)
            companyArrow.setAttribute("src", "./images/icon-arrow-up.svg");

        featureArrow
            ? (featuresNavStatus = "open")
            : (companyNavStatus = "open");
    } else {
        nav.style.transition = "height 0.15s";
        nav.style.opacity = "0";
        nav.style.visibility = "hidden";
        nav.style.pointerEvenets = "none";
        nav.style.position = "absolute";
        nav.style.height = "0";

        if (featureArrow)
            featureArrow.setAttribute("src", "./images/icon-arrow-down.svg");
        if (companyArrow)
            companyArrow.setAttribute("src", "./images/icon-arrow-down.svg");

        featureArrow
            ? (featuresNavStatus = "closed")
            : (companyNavStatus = "closed");
    }
};

openMenuBtn.addEventListener("click", function () {
    nav.style.right = "0";
    menuBg.style.opacity = "0.75";
    menuBg.style.visibility = "visible";
    menuBg.style.pointerEvents = "all";
});

closeMenuBtn.addEventListener("click", function () {
    nav.style.right = "-240px";
    menuBg.style.opacity = "0";
    menuBg.style.visibility = "hidden";
    menuBg.style.pointerEvents = "none";
});

menuBg.addEventListener("click", function () {
    nav.style.right = "-240px";
    menuBg.style.opacity = "0";
    menuBg.style.visibility = "hidden";
    menuBg.style.pointerEvents = "none";
});

featuresBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (window.visualViewport.width < 1010)
        openSubNav(subNav, featuresArrow, undefined, 160);

    // prettier-ignore
    if (window.visualViewport.width >= 1010 && subNav.classList.contains("closed")) {
        subNav.style.pointerEvents = "all";
        subNav.style.opacity = "1";
        subNav.style.visibility = "visible";
        featuresArrow.setAttribute("src", "./images/icon-arrow-up.svg");
        subNav.classList.remove("closed");
    } else if (window.visualViewport.width >= 1010) {
        subNav.style.pointerEvents = "none";
        subNav.style.opacity = "0";
        subNav.style.visibility = "hidden";
        featuresArrow.setAttribute("src", "./images/icon-arrow-down.svg");
        subNav.classList.add("closed");
    }
});

companyBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (window.visualViewport.width < 1010)
        openSubNav(secondSubNav, undefined, companyArrow, 118);

    // prettier-ignore
    if ( window.visualViewport.width >= 1010 && secondSubNav.classList.contains("closed")) {
        secondSubNav.style.pointerEvents = "all";
        secondSubNav.style.opacity = "1";
        secondSubNav.style.visibility = "visible";
        companyArrow.setAttribute("src", "./images/icon-arrow-up.svg");
        secondSubNav.classList.remove("closed");
    } else if (window.visualViewport.width >= 1010) {
        secondSubNav.style.pointerEvents = "none";
        secondSubNav.style.opacity = "0";
        secondSubNav.style.visibility = "hidden";
        companyArrow.setAttribute("src", "./images/icon-arrow-down.svg");
        secondSubNav.classList.add("closed");
    }
});
