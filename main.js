
var slideIndex = 1;
showDivs(slideIndex);

function plusDivsSkills(n) {
  showDivsSkills(slideIndex += n);
}

function showDivsSkills(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesSkills");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function plusDivsCerts(n) {
  showDivsCerts(slideIndex += n);
}

function showDivsCerts(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesCerts");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function showAll(){

	const hide = document.getElementsByClassName("hidden-objects")
	const showbutton = document.getElementById("show-button-div")

	for (i = 0; i < hide.length; i++) {
		hide[i].style.display = "block";
	}
		showbutton.style.display = "none";  

}

