function setup() {
createCanvas(1240, 1748);

noLoop();
// background(0,100,200);
}

function draw() {
   blendMode(LIGHTEST);
  strokeWeight(30);
  stroke(80, 150, 255);
  line(125, 125, 75, 75);
  stroke(255, 50, 50);
  line(75, 25, 25, 75);



 blendMode(MULTIPLY);
strokeWeight(30);
stroke(80, 150, 255);
line(25, 25, 175, 175);
stroke(255, 50, 50);
line(175, 125, 125, 175);

  blendMode(ADD);
  fill(255,0,0);
  rect(300, 300, 200, 200);
  fill(13,209,221); // cyan
  rect(400, 300, 200, 200);

  blendMode(DIFFERENCE);
  fill(255,0,0);
  rect(600, 600, 200, 200);
//  fill(13,209,221); // cyan
//  rect(400, 300, 200, 200);

blendMode(EXCLUSION);
fill(13,209,221);
rect(700, 700, 200, 200);

blendMode(EXCLUSION);
fill(13,209,221);
rect(900, 900, 200, 200);
/*
fill(255);
noStroke();

blendMode(EXCLUSION);
rect(100,100,100,100);
rect(150,150,500,500);

fill(200);

blendMode(BLEND); // seems to be affected by the previous blendMode
rect(50,250,150,150);

blendMode(OVERLAY);
rect(250,50,175,175);

blendMode(BURN);
rect(500,150,200,50);

blendMode(MULTIPLY);
rect(500,175,200,50);

blendMode(SCREEN);
rect(500,300,200,50);

blendMode(REPLACE);
rect(500,400,200,50);

blendMode(OVERLAY);
rect(500,500,200,50);

blendMode(HARD_LIGHT);
rect(500,600,200,50);

blendMode(SOFT_LIGHT);
rect(500,700,200,50);

//blendMode(ADD); // doesn't work, ADD is not defined
//rect(225,250,200,200);

blendMode(LIGHTEST);
rect(225,250,200,200);

blendMode(DARKEST);
rect(225,500,200,200);
*/
}

function keyPressed(){
    if(key=='s' || key=='S') saveCanvas('png');
    // if(key=='s' || key=='S') saveCanvas(gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY,'png');
    //gd is the generative design library
}
