$(document).ready(function(){
	
	// first fade all images out when the page loads
  $('#gallery a').fadeTo(500,0.2);

  // create a function that will trigger on mouseover to fade in the image
  function mouseOn() {
    $(this).fadeTo(200,1);
  }
  // create a function that will trigger on mouseout to fade image back out
  function mouseOff() {
    $(this).fadeTo(400,0.2);
  }

  // lastly set up an event listener on the image to trigger the functions above 
  $('#gallery a').hover(mouseOn,mouseOff);  

});