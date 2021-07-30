// slider
var i = 0; // Start Point
var images = []; // Images Array
var time = 5000; // Time Between Switch


// Image List
images[0] = "images/home-slideshow-01-b5d1e4ae.webp";
images[1] = "images/home-slideshow-02-1f77e65a.webp";
images[2] = "images/home-slideshow-03-7915e7f6.webp";

// Change Image
function changeImg() {
  document.slide.src = images[i];
  document.slide.height = "868";
  // Check If Index Is Under Max
  if (i < images.length - 1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;
