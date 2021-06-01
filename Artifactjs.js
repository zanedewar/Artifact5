var myImages = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpeg"];
var captionImages = ["Landscape", "Dashboard", "Stars", "Pink", "Road"]
var index = 0;
function updateImage() {
	document.getElementById("slideshow").src = myImages[index];
	document.getElementById("slideshow").alt = captionImages[index];
	document.getElementById("caption").textContent = captionImages[index];
}
function next(){
	index = (myImages.length == index+1) ? 0 : index + 1;
	updateImage();
}
function back(){
	index = (index===0) ? myImages.length - 1 : index - 1;
	updateImage();
}
function autoSlide(){
	if(document.getElementById("auto").checked)
		next();
}
setInterval(autoSlide,2000);
var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");
previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false);