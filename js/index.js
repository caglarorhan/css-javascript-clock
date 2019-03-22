
window.addEventListener('load',function(){
    setInterval(function(){calculateTime();},1000)

});

function calculateTime(){
    let dTime = new Date(Date.now());
    let dH = dTime.getHours(); let ddH = ((dH-45)/12*360);
    let dM = dTime.getMinutes(); let ddM =((dM-45)/60*360);
    let dS = dTime.getSeconds(); let ddS = ((dS-45)/60*360);

    document.querySelector("div.second-hand").style.transform="rotate("+ddS+"deg)";
    document.querySelector("div.min-hand").style.transform="rotate("+ddM+"deg)";
    document.querySelector("div.hour-hand").style.transform="rotate("+ddH+"deg)";
}

