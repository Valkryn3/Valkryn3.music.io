/*
Student Name: Bryn Batten
File Name: script.js
Date: 2/1/24
*/

//Hamburger menu function
function hamburger() {
	var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
         menu.style.display = "none";
    } 
    else {
        menu.style.display = "block";
    }
}
