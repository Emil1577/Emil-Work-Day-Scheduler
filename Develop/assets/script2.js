function futureHr() {

    var idHr ="hour-" + dayHr;
    var hrIdEl = (document.getElementById(idHr).id);
    $("#"+hrIdEl).addClass("row time-block future");
    
  }
  function presentHr() {
  
    var idHr ="hour-" + dayHr;
    var hrIdEl = (document.getElementById(idHr).id);
    $("#"+hrIdEl).addClass("row time-block present");
  
  }
  
  function pastHr() {
  
    var idHr ="hour-" + dayHr;
    var hrIdEl = (document.getElementById(idHr).id);
    $("#"+hrIdEl).addClass("row time-block past");
    
  }