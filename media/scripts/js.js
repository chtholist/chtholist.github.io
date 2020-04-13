var clock_elem,date_elem,months = ["janvier","fevrier","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],weekdays = ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]
 
function load(){
    clock_elem = document.getElementById("clock");
    date_elem = document.getElementById("date");
   
    setInterval(update,1000/30);
}
 
function update(){
    var curTime = new Date();
    var minutes = (curTime.getMinutes()<10)?("0" + curTime.getMinutes()):(curTime.getMinutes());
    var seconds = (curTime.getSeconds()<10)?("0" + curTime.getSeconds()):(curTime.getSeconds());
    //clock_elem.innerHTML = curTime.toLocaleTimeString();
   
    //date_elem.innerHTML = weekdays[curTime.getDay()] + ", " + months[curTime.getMonth()] + " " + curTime.getDate() + ", " + curTime.getFullYear();
    date_elem.innerHTML = weekdays[curTime.getDay()] + " " + curTime.getDate() + " " + months[curTime.getMonth()];
}