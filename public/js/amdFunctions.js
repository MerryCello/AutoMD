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