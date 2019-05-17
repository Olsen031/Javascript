var date = getDate();
var month = getMonth();
var year = getYear();

if(date < 10){
  date = "0" + date;
}
if(month < 9){
  month = "0" + month;
}
var correctDate = month + date + year;
function enterDate(){
  var txt;
  var theDate = prompt("Please enter the correct date with 0's and no spaces", "");
  if(theDate == correctDate){
    txt = document.getElementById("demo").innerHTML = "You entered the correct date";
  }
  else{
    txt = document.getElementByID("demo").innerHTML = "You entered the wrong date. The correct date was: " + correctDate;
  }
}
