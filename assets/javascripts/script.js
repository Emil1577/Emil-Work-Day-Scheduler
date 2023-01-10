
$(function () {

//Created variables for time and handling the hour


// Sets time interval
function clockTick(){

  today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY, h:mm:ss a'));

}
setInterval (clockTick, 1000);

// loop function to go through each id "hour-x". Starts at the 9th hour and ends at the 17th hour.
var currentHr = dayjs().hour();

for (let i=9; i<18; i++) {

  var dayHr = i;
  var idHr ="#hour-" + dayHr;
  var saveButtonEl = document.querySelector(idHr);  
  var userTextInput = localStorage.getItem('Schedule '+i);

  document.querySelector("#text-"+i).textContent = userTextInput;

  saveButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    //assigned id "#text-x" to HTML
    var getHr = ("#text-"+i)
    var schedInput = $(getHr).val();

    localStorage.setItem('Schedule '+i,schedInput);
 
  }); 
  
//if functions comparing the current hour with id="hour-x" then sets the class
if (dayHr===currentHr) {

  $(idHr).addClass("row time-block present");

} else if (dayHr < currentHr)  { 

  $(idHr).addClass("row time-block past");

} else {

  $(idHr).addClass("row time-block future");

}

}

});