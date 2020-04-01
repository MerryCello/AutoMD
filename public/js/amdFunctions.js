// const e = require("express");

document.addEventListener("DOMContentLoaded", function() {
    // Display page last modified date
    lastModified();

})
// Last updated function
function lastModified() {
    document.getElementById("lastModified").innerHTML = "Last Updated " + document.lastModified;
}

function openNav() {
    document.getElementById("mySidenav").style.width = "20vw";
    document.getElementById("sideMenu").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("sideMenu").style.display = "initial";
}

/*
 * Popups
 */
let openPopup = (event) => {
    // $('#' + popupId).toggleClass('show');
    event.preventDefault();
    $(".popup").fadeIn(300, () => { $(this).focus(); });
}
let closePopups = () => {
    $('.popup').fadeOut(300);
}

/*
 * Slides
 */
let openSlide = (event) => {
    event.preventDefault();
    $('.' + event.target.id).fadeIn(300, () => { $(this).focus(); });
}
let closeSlides = (event) => {
    $('.slide').fadeOut(300);
}

$(document).ready(() => {
    $('.popupLink').click(openPopup);
    $('.close').click(closePopups);
    $('.popup').on('blur', closePopups);
    $('.slideLink').click(openSlide);
    $('.close').click(closeSlides);
    $('.slide').on('blur', closeSlides);
})
