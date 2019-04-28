function setup() {
createCanvas(1240, 1748);
stroke(10,23,233);
strokeWeight(3);
noLoop();
actStrokeCap = ROUND;
// background(0,100,200);
}

var tileCount = 20;
var actStrokeCap;

let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;

let x3 = 0;
let y3 = 0;
let x4 = 0;
let y4 = 0;

function draw() {

  strokeCap(actStrokeCap);
    drawCircle(width/2, 280, 6);

    for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < tileCount; gridX++) {

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
 }
}
   // blendMode(ADD);
   // fill(255,0,0);
   // rect(300, 300, 200, 200);
   // fill(13,209,221); // cyan
   // rect(400, 300, 200, 200);

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




for (let i = 0; i < width; i  = i + 40) {
/*  blendMode(LIGHTEST);
  strokeWeight(30);
  stroke(80, 150, 255);
  line(125, 125, 75, 75);
  stroke(255, 50, 50);
  line(x1, y1, 25 + x2, 75 + y2);



 blendMode(MULTIPLY);
strokeWeight(30);
stroke(80, 150, 255);
line(25, 25, 175, 175);
stroke(255, 50, 50);
line(x3, y3, 125 + x4, 175 + x4);

x1 = x1 + 30;
y1 = y2 + 30;
x2 = x2 + 30;
y2 = y2 + 30;

x3 = x3 + 30;
y3 = y3 + 30;
x4 = x4 + 30;
y4 = y4 + 30; */
  }
}
function drawCircle(x, radius, level) {
  var tt = 126 * level/4.0;
//  fill(tt);
  ellipse(x, height/2, radius*4, radius*4);
ellipse(x, height/8, radius*2, radius*2);
 translate(10, 10);
ellipse(x, height/8, radius*2, radius*2);
  if(level > 1) {
    level = level - 1;
    blendMode(ADD);
    fill(255,33,0);

    drawCircle(x - radius/2, radius/2, level);
    blendMode(DIFFERENCE);
    fill(0,255,220);
    drawCircle(x + radius/2, radius/2, level);
  }
//  blendMode(ADD);
//  fill(255,0,0);
//  rect(300, 300, 200, 200);
//  fill(13,209,221); // cyan
//  rect(400, 300, 200, 200);

  //blendMode(DIFFERENCE);
  //fill(255,0,0);
  //rect(600, 600, 200, 200);
//  fill(13,209,221); // cyan
//  rect(400, 300, 200, 200);

//blendMode(EXCLUSION);
//fill(13,209,221);
//rect(700, 700, 200, 200);

//blendMode(EXCLUSION);
//fill(13,209,221);
//rect(900, 900, 200, 200);


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

function keyReleased() {
  if (key == '1') actStrokeCap = ROUND;
  if (key == '2') actStrokeCap = SQUARE;
  if (key == '3') actStrokeCap = PROJECT;
}
