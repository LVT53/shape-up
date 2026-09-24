let caption = "Healthy food";
const imageMain = document.getElementById("image_main");
const image0 = document.getElementById("image0");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const captionDisplay = document.getElementById("caption");

// Add updateImageMain()
function updateImageMain(link) {
  imageMain.src = link.href;

}
// Add updateCaption()
function updateCaption() {
  captionDisplay.innerText = caption;
}
// Add one click rule per thumbnail link (image0 ... image3)
image0.addEventListener("click", function (event) {
  event.preventDefault();
  updateImageMain(image0);
  caption = "Healthy breakfast"
  updateCaption();
});
image1.addEventListener("click", function (event) {
  event.preventDefault();
  updateImageMain(image1);
  caption = "Healthy lunch"
  updateCaption();
});
image2.addEventListener("click", function (event) {
  event.preventDefault();
  updateImageMain(image2);
  caption = "Healthy dinner"
  updateCaption();
});
image3.addEventListener("click", function (event) {
  event.preventDefault();
  updateImageMain(image3);
  caption = "Healthy desert"
  updateCaption();
});
