// Slider
let slider = document.getElementById("myRange");
let output = document.getElementById("slider_num");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};
