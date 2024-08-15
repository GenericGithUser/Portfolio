function turnOn(){
    document.getElementById('bulb').src = "./images/on.png";
    document.getElementById('txt').innerHTML = "The Light is ON";
    document.getElementById('txt').style.color = "black";
    document.getElementById('btnOff').style.display ="none";
    document.getElementById('btnOn').style.display ="block";
    document.body.style.background = "radial-gradient(circle, yellow 0%, burlywood, 50%, gray 100% )";
}
function turnOff(){
    document.getElementById('bulb').src = "./images/off.png";
    document.getElementById('txt').innerHTML = "The Light is OFF";
    document.getElementById('btnOn').style.display ="none";
    document.getElementById('btnOff').style.display ="block";
    document.body.style.background ="gray";
    document.getElementById('txt').style.color = "antiquewhite";
}