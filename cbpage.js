/* opponent, scoreus, scorethem, datetime, lineup[] */

var cbarray = [
    
    [
    "Tews", "5", "0", "12.1.2021 @ 18:00", "1", [
        "Eli", "Veqma", "Durian", "Seijaru", "MG"],
        [5, 6, 2, 3, 2]
]];

function CBarrayToString(array){

    str = "";

    str += "<p class='cbtitle' onclick='ShowPopup(" + array[4] + ")'><a href='#'>Levitate vs " + array[0] + "</a></p>";
    str += "<p class='cbresult'>" + array[1] + "-" + array[2] + "</p>";
    str += "<p class='cbdatetime'>" + array[3] + "</p>";

    return str;
}

function ShowPopup(id){
    
    document.getElementById("popup").style.visibility = "visible";

    p1 = document.getElementById("p1");
    p2 = document.getElementById("p2");
    p3 = document.getElementById("p3");
    p4 = document.getElementById("p4");
    p5 = document.getElementById("p5");

    p1.innerHTML = cbarray[id - 1][5][0] + " - " + cbarray[id - 1][6][0] + " stocks"
    p2.innerHTML = cbarray[id - 1][5][1] + " - " + cbarray[id - 1][6][1] + " stocks"
    p3.innerHTML = cbarray[id - 1][5][2] + " - " + cbarray[id - 1][6][2] + " stocks"
    p4.innerHTML = cbarray[id - 1][5][3] + " - " + cbarray[id - 1][6][3] + " stocks"
    p5.innerHTML = cbarray[id - 1][5][4] + " - " + cbarray[id - 1][6][4] + " stocks"

    highest = 0;
    highestIter = 0;

    for (var i = 0; i < 5; i++){
        if (cbarray[id - 1][6][i] > highest){

            highest = cbarray[id - 1][6][i];
            highestIter = i;
        } 
    }

    num = parseInt(highestIter) + 1
    highlightStr = "p" + num + " = document.getElementById('p" + num + "');"

    highlight = eval(highlightStr);

    highlight.style.color = "green";
}

function HidePopup(){
    document.getElementById("popup").style.visibility = "hidden";
}

var timesMoved = 1;

function MoveNavbar(pixels){
    navbar = document.getElementById("navbar");
    navbar.style.backgroundPositionX = timesMoved * pixels + "px";
    timesMoved++;
}

window.onload = function(){

    finalstr = "";

    for (var i = 0; i < cbarray.length; i++){
        finalstr += CBarrayToString(cbarray[i]);
    }

    document.getElementById("cbresults").innerHTML = finalstr;

    setInterval(function(){ MoveNavbar(5) }, 75)
}