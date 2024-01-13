'use strict';

//**add event on element */

const addEventOnElem = function(element, type, callback) {
    if (eleme.length > 1) {
        for(let i = 0; i < element.length; i++) {
            element[i].addEventListener(type, callback);
        }
        
    } else {
        element.addEventListener(type, callback);
    }
}



/** navbar toggle */
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

/** header active */
const header = document.querySelector("[data-header]");
const activeHeader = function () {
    if(window.scrollY > 300) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

addEventOnElem(window, "scroll", activeHeader);



