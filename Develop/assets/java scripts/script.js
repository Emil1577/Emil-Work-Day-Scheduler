
$(function () {

//Created variables for time and handling the hour
var today = dayjs();
var currentHr = dayjs().hour();

$('#currentDay').text(today.format('MMM D, YYYY, h:mm a'));

currentHr = dayjs().hour();

// loop function to go through each id "hour-x"
for (let i=9; i<17; i++) {

  var dayHr = i;
  var idHr ="#hour-" + dayHr;
  var saveButtonEl = document.querySelector(idHr);
  var count = localStorage.getItem('Schedule '+i);

  document.querySelector("#text-"+i).textContent = count;

  saveButtonEl.addEventListener("click", function(event) {
    event.preventDefault();

    var getHr = ("#text-"+i)
    var schedInput = $(getHr).val();

    localStorage.setItem('Schedule '+i,schedInput);
 
  }); 

if (dayHr===currentHr) {

  $(idHr).addClass("row time-block present");

} else if (dayHr < currentHr)  { 

  $(idHr).addClass("row time-block past");

} else {

  $(idHr).addClass("row time-block future");

}

}

});
