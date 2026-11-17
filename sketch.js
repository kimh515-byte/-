
let color = "red";

function setup() {
  createCanvas(600, 400);
  background(255);
}

function draw() {
  fill(0);
  noStroke();
  rect(0, 0, 600, 40);

  fill(255);
  textSize(14);
  text("R = Red | B = Blue | Y = Yellow | C = Clear", 20, 25);
}

function mousePressed() {
  fill(color);
  noStroke();
  circle(mouseX, mouseY, 40);
  console.log("Mouse clicked");
}

function keyPressed() {
  if (key === "r") {
    color = "red";
  }

  if (key === "b") {
    color = "blue";
  }

  if (key === "y") {
    color = "yellow";
  }

  if (key === "c") {
    background(255);
  }

  console.log("Key pressed: " + key);
}
