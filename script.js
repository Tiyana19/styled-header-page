const slideImg = document.querySelector("#slideImg");

let image = [
  "./images/image1.jpg",
  "./images/image2.jpg",
  "./images/image3.jpg",
  "./images/image4.jpg",
];
let i = 0;
function slider() {
  if (i > image.length - 1) {
    i = 0;
  }
  slideImg.src = image[i];
  i++;
  setTimeout("slider()", 3000);
}
window.onload = slider;
