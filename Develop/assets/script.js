// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
  

//We use addEventListener() on the signUpButton and listen for a click event. We prevent the browser's default action using event.preventDefault()

  // local storage. HINT: What does `this` reference in the click listener


// Below is the DOM for date and time


var today = dayjs();
var currentHr = dayjs().hour();

$('#currentDay').text(today.format('MMM D, YYYY, h:mm a'));


// Below is the code to get the current hour and compare the hour with the id on the html and add the class to it's id to change the format.

currentHr = dayjs().hour();



for (let i=9; i<17; i++) {

  var dayHr = i;
  var idHr ="#hour-" + dayHr;
  var saveButtonEl = document.querySelector(idHr);


  saveButtonEl.addEventListener("click", function(event) {

    event.preventDefault();
    var getHr = ("#text-"+i)
    var count = document.querySelector(getHr);


    console.log(getHr); 

    var count = localStorage.getItem('Schedule '+i);
    //const sched = localStorage.getItem('#hour-9');
    var sched = $(getHr).val();
    console.log(sched);

    
    document.querySelector("#text-"+i).textContent = count;
    localStorage.setItem('Schedule '+i,sched);
    console.log (count)
 
  }); 

  
  
function render(){

  counsole.log("hello");
  
}

if (dayHr===currentHr) {

  $(idHr).addClass("row time-block present");

} else if (dayHr < currentHr)  { 

  $(idHr).addClass("row time-block past");

} else {

  $(idHr).addClass("row time-block future");

}



}






  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
