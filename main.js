var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}



function isChecked(){
const body = document.body
const text1 = document.getElementById("tl-text")
const text2 = document.getElementById("bot-text")
const logow = document.getElementById("top-logo-white")
const logob = document.getElementById("top-logo-black")
const aba = document.getElementById("aba-topo")



	if(document.getElementById("switcher").checked){

		logow.style.display = "none";
		logob.style.display = "inline";
		body.classList.add("dark");
		aba.classList.add("aba-white");
		aba.classList.remove("aba-black");
		text1.classList.add("dark-content-box");
		text2.classList.add("dark-content-box");

	}
	else {

		logow.style.display = "inline";
		logob.style.display = "none";
		body.classList.remove("dark");
		aba.classList.add("aba-black")
		aba.classList.remove("aba-white")
		text1.classList.remove("dark-content-box");
		text2.classList.remove("dark-content-box");

	}

}


function showAll(){

	const hide = document.getElementsByClassName("hidden-objects")
	const showbutton = document.getElementById("show-button-div")

	for (i = 0; i < hide.length; i++) {
		hide[i].style.display = "block";
	}
		showbutton.style.display = "none";  

}