timesMoved = 1;

function MoveNavbar(pixels){
    navbar = document.getElementById("navbar");
    navbar.style.backgroundPositionX = timesMoved * pixels + "px";
    navbar.style.backgroundPositionY = -timesMoved * pixels + "px";
    timesMoved++;
}

window.onload = function(){
    setInterval(function(){ MoveNavbar(5) }, 75)
}