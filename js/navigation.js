// FUNCTION KLIK MENU HAMBURGER
var menu = document.querySelectorAll("#menu")[0]
var navDropdown = document.querySelectorAll(".nav-dropdown")[0]
var navBar = document.querySelectorAll("#nav-bar")[0]

var menuClicked = false
function menuDropdown(){
    if(menuClicked == false){
        menu.src = "assets/img/icon-cross.png"
        navDropdown.style.display = "flex"
        menuClicked = true
    }
    else if(menuClicked == true){
        menu.src = "assets/img/icon-menu.png"
        navDropdown.style.display = "none"
        menuClicked = false
    }
}

menu.onclick = menuDropdown