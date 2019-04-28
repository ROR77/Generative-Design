

// Constants
var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, c1, c2;

function setup() {
   createCanvas(1240, 1748);

  // Define colors
  b1 = color(255);
  b2 = color(0);
  c1 = color(233, 247, 254);
  c2 = color(6, 22, 47);
  noStroke();
  noLoop();
}

function draw() {
  // Background
  setGradient(0, 0, width, height, c1, c2, X_AXIS);
//  setGradient(width/2, 0, width/2, height, b2, b1, X_AXIS);
  // Foreground
//  setGradient(50, 90, 540, 80, c1, c2, Y_AXIS);
//  setGradient(50, 190, 540, 80, c2, c1, X_AXIS);
noStroke();
fill(0, 174, 239);
rect(50, 50, 1000, 200);
fill(0, 174, 239);
rect(50, 400, 1000, 200);
fill(0, 174, 239);
rect(50, 750, 1000, 200);
}

function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);

    }

  }
}


function keyPressed(){
    if(key=='s' || key=='S') saveCanvas('png');
    // if(key=='s' || key=='S') saveCanvas(gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY,'png');
    //gd is the generative design library
}
