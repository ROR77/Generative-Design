  let cx, cy;

function setup(){
  createCanvas(400,400);
  angleMode(DEGREES);
  cx = width / 2;
  cy = height / 2;
}

function draw(){
  background(200);
  // this is the centre of the canvas
  translate(200, 200);
  rotate(-90);


  let hr = hour();
  let mn = minute();
  let sc = second();

  // strokeWeight(8);
  // stroke(255);
  // noFill();
  // ellipse(200, 200, 300, 300);

  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
//  map(value, start1, stop1, start2, stop2, [withinBounds])
  let secondAngle = map(sc , 0, 60, 0, 360);
  // arc(x, y, w, h, start(angle), stop(angle), [mode], [detail])
  // arc(0, 0, 300, 300, 0, secondAngle);



  stroke(25, 188, 150);
  let minuteAngle = map(mn , 0, 60, 0, 360);
  // arc(0, 0, 280, 280, 0, minuteAngle);

  stroke(2, 10, 199);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  // arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke(255, 100, 150);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(25, 188, 150);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(2, 10, 199);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0,0);

   translate(-200, -200);
   strokeWeight(3);
  beginShape(POINTS);
  for(let a = 0; a < 360; a += 6){
    let angle = degrees(a);
    let x = cx + cos(angle) * 110;
    let y = cy + sin(angle) * 110;
    vertex(x,y);
  }
  endShape();
}
