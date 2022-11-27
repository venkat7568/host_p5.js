const { text } = require("body-parser");

function setup() {
    createCanvas(windowWidth, windowHeight);
  }
function mousePressed() {
    if (mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight) {
      let fs = fullscreen();
      fullscreen(!fs);
    }
}
function draw() {
    background(0);
    textSize(20);
    text("venkat",100,100);
    fill(255);
    
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}