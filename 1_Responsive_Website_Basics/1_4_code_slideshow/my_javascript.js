// This is the template from the Class: 1_4_code_slideshow, that I change the jQuery code into Javascript:

// whether the slideshow is paused or not
let paused = false;
let counter = 1; // the counter variable that keeps track of which image you are showing
const elementBigImage = document.getElementById('bigImage');

// when you click on a thumbnail, it sets the src of the big image to be the same as the image you clicked on
// $(".crop-img").click(function(){
//   $("#bigImage").attr('src', 
//     $(this).attr('src'));
// // });

const smallImages = document.getElementsByClassName('crop-img');

for (elementSmallImage of smallImages) {
  elementSmallImage.addEventListener('click', (event) => {
    const srcElementSmallImage = event.target.src;
    elementBigImage.setAttribute('src', srcElementSmallImage);
    counter = (event.target.id).slice(-1);
  })
}

// $("#image"+counter).click(); // virtually click on the current image to load it into the big image
document.getElementById('image' + counter).click();

// $("#forward").click(function (){ // when you click on the forwards button select the next image
//   counter = counter + 1; // go forward one in the counter
//   if(counter > 4){ // if we are above 4 (the last image) loop round to 1 (the first image)
//     counter = 1;
//   }
//   $("#image"+counter).click(); // virtually click on the current image to load it into the big image
// });
function changeImage() {
  const nextSmallImage = document.getElementById('image' + counter);
  const srcElementSmallImage = nextSmallImage.getAttribute('src');
  elementBigImage.setAttribute('src', srcElementSmallImage);
}

const forward = () => {
  counter = counter + 1;
  if(counter > 4){
    counter = 1;
  }
  changeImage();
}

document.getElementById('forward').addEventListener('click', forward);

// $("#backward").click(function (){ // when you click on the backwards button select the previous image
//   counter = counter - 1; 	// go back one in the counter
//   if(counter < 1){ // if we are below 1 (the first image) loop round to 4 (the last image)
//     counter = 4;
//   }
//   $("#image"+counter).click(); // virtually click on the current image to load it into the big image
// // });
const backward = () => {
  counter = counter - 1;
  if(counter < 1){
    counter = 4;
  }
  changeImage();
}

document.getElementById('backward').addEventListener('click', backward);

// $("#bigImage").click(function (){ // when you click the big image toggle pausing. Set paused to not paused.
//   paused = !paused; // i.e. if it is paused set it to not paused, if it is not paused set it to paused
// });
document.getElementById('bigImage').addEventListener('click', changeValuePaused);
function changeValuePaused() {
  paused = !paused;
}

// setInterval(function (){ // set interval makes it move forward every 3 second
//   if(!paused){ // first check if it is paused
//     $("#forward").click(); // virtual click the forward button
//   };
// }, 3000);
setInterval(() => {
  if (!paused) {
    console.log('deu certo');
    forward();
  }
}, 3000);

// Ver setTimeout