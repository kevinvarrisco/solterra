// FUNCTION KLIK MENU HAMBURGER BERBEDA DENGAN PAGE LAIN KARENA BACKGROUND TRANSPARENT
var menu = document.querySelectorAll("#menu")[0]
var navDropdown = document.querySelectorAll(".nav-dropdown")[0]
var navBar = document.querySelectorAll("#nav-bar")[0]

var menuClicked = false
function menuDropdown(){
    if(menuClicked == false){
        menu.src = "assets/img/icon-cross.png"
        navDropdown.style.display = "flex"
        navBar.style.backgroundImage = "linear-gradient(45deg, #077F9E, #24A1C0)"
        menuClicked = true
    }
    else if(menuClicked == true){
        menu.src = "assets/img/icon-menu.png"
        navDropdown.style.display = "none"
        navBar.style.backgroundImage = "none"
        menuClicked = false
    }
}

menu.onclick = menuDropdown




// FUNCTION CAROUSEL SECTION REVIEW
var rev1 = document.querySelectorAll(".review-1")[0];
var rev2 = document.querySelectorAll(".review-2")[0];
var rev3 = document.querySelectorAll(".review-3")[0];
var indicator = document.getElementsByClassName("indicator")

function carousel(){
    var index = 0
    setInterval(function(){         
        if(index == 0){
            rev3.style.visibility = "hidden"
            rev2.style.visibility = "visible"
            index++
        }
        else if(index == 1){
            rev3.style.transform = "translateX(-100%)"
            index++
        }       
        else if(index == 2){
            rev1.style.transform = "translateX(-100%)"
            rev2.style.transform = "translateX(-100%)"
            indicator[0].classList.remove("indicator-active")
            indicator[1].classList.add("indicator-active")
            index++
        }
        else if(index == 3){            
            rev1.style.visibility = "hidden"
            rev3.style.visibility = "visible"
            index++
        }
        else if(index == 4){
            rev1.style.transform = "translateX(100%)"
            index++
        }
        else if(index == 5){
            rev2.style.transform = "translateX(-200%)"
            rev3.style.transform = "translateX(-200%)"
            indicator[1].classList.remove("indicator-active")
            indicator[2].classList.add("indicator-active")
            index++
        }
        else if(index == 6){
            rev2.style.visibility = "hidden"
            rev1.style.visibility = "visible"
            index++
        }
        else if(index == 7){
            rev2.style.transform = "translateX(0%)"
            index++
        }
        else if(index == 8){
            rev3.style.transform = "translateX(-300%)"
            rev1.style.transform = "translateX(0%)"
            indicator[2].classList.remove("indicator-active")
            indicator[0].classList.add("indicator-active")
            index = 0
        }

    }, 3000)    
}

carousel()
