function onload() {
  var today = new Date();
  var month = today.getMonth() + 1;
  var newMonth = '';
  switch (month) {
    case 1:
      newMonth = "Jan";
      break;
    case 2:
      newMonth = "Feb";
      break;
    case 3:
      newMonth = "Mar";
      break;
    case 4:
      newMonth = "Apr";
      break;
    case 5:
      newMonth = "May";
      break;
    case 6:
      newMonth = "Jun";
      break;
    case 7:
      newMonth = "Jul";
      break;
    case 8:
      newMonth = "Aug";
      break;
    case 9:
      newMonth = "Sep";
      break;
    case 10:
      newMonth = "Oct";
      break;
    case 11:
      newMonth = "Nov";
      break;
    case 12:
      newMonth = "Dec";
      break;
  }
  var day = today.getDate();
  var thu = today.getDay();
  var hour = today.getHours();
  var newHour = ((hour + 11) % 12 + 1);
  var AmPm = today.getHours() < 12 ? "AM" : "PM";
  var minutes = today.getMinutes();
  var minutes = (minutes < 10 ? "0" + minutes : minutes);
  var newThu = '';
  switch (thu) {
    case 0:
      newThu = "Sun";
      break;
    case 1:
      newThu = "Mon";
      break;
    case 2:
      newThu = "Tue";
      break;
    case 3:
      newThu = "Wed";
      break;
    case 4:
      newThu = "Thu";
      break;
    case 5:
      newThu = "Fri";
      break;
    case 6:
      newThu = "Sat";
  }
  var result = newHour + " " + ':' + " " + minutes + " " + AmPm + " " + "-" + " " + newThu + "," + newMonth + " " + day;
  document.getElementById('date').innerHTML = result;

};
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  var i;
  var mySlides = document.getElementsByClassName("slides");
  if (n > mySlides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = mySlides.length }
  for (i = 0; i < mySlides.length; i++) {
    mySlides[i].style.display = "none";
  };
  mySlides[slideIndex - 1].style.display = "block";
};



