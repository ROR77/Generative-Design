var textTyped = "j";
var font;
var fontSize = 200;
var textImg;
var colorMap;
var colorMap2;
var colorMap2Small;

var pointDensity = 6;
var circleSize = 6;
var randomAmount = 100;

var finishArray = [];
var startArray = [];
var stepAmount = 100;
var counter = 0;
var circleSlider;
var densitySlider;
var counterDir = true;

var filled = 1;
var animate = false;

var checkbox;
var animateBox;
var myWidth = $("#canvasHolder").width();

function preload() {
    font = loadFont("data/FreeSansBold.ttf");
    colorMap = loadImage('data/colorMap.jpg');
    colorMap2 = loadImage('data/colorMap2.jpg');
    // colorMap2Small = loadImage('data/colorMapSmall.jpg');
}

function setup() {
    var canvas = createCanvas(myWidth * 2, myWidth/2);
    canvas.parent('canvasHolder');

    createTextGraphic();
    colorMap.loadPixels();
    colorMap2.loadPixels();
    // colorMap2Small.loadPixels();
    createArrays();
    frameRate(30);

    circleSlider = createSlider(1, 20, 6);
    circleSlider.class("circleSlider");
    circleSlider.mouseReleased(update);
    circleSlider.parent('radiusController');

    densitySlider = createSlider(1, 3, 2);
    densitySlider.class("densitySlider");
    densitySlider.mouseReleased(update);
    densitySlider.parent('densityController');

    fontSizeSlider = createSlider(50, 400, 100);
    fontSizeSlider.class("fontSizeSlider");
    fontSizeSlider.mouseReleased(update);
    fontSizeSlider.parent('fontSizeController');

    randomSlider = createSlider(0, 200, 100);
    randomSlider.class("randomSlider");
    randomSlider.mouseReleased(update);
    randomSlider.parent('randomController');

    inputBox = createInput("Beauty");
    inputBox.class("inputBox");
    inputBox.input(update);
    inputBox.parent('inputBoxController');

    checkBox = createCheckbox('Filled', true);
    checkBox.class("checkBox");
    checkBox.changed(update);
    checkBox.parent('checkBoxController');

    animateBox = createCheckbox('Animate', false);
    animateBox.class("animateBox");
    animateBox.changed(update);
    animateBox.parent('animateBoxController');

}

function createTextGraphic() {
    // create an offscreen graphics object to draw the text into
    //console.log("check")
    colorLerp1 = color(255 * random(1), 255 * random(0.5), 255 * random(0.5));
    colorLerp2 = color(255 , 255 , 255 );
    var back1 = lerpColor(colorLerp1, colorLerp2, 0.5);
    textImg = createGraphics(width, height);
    textImg.pixelDensity(1);
    textImg.background(back1);
    textImg.textFont(font);
    textImg.textSize(fontSize);
    textImg.textAlign(CENTER);

    textImg.text(textTyped, width / 2, fontSize);
    textImg.loadPixels();
}

function createArrays() {
    for (var x = 0; x < textImg.width; x += pointDensity) {
        for (var y = 0; y < textImg.height; y += pointDensity) {
            // Calculate the index for the pixels array from x and y
            var index = (x + y * textImg.width) * 4;

            // Get the red value from image
            var r = textImg.pixels[index];
            var g = textImg.pixels[index];

            if (r < 128) {
                var rValue = colorMap.pixels[index];
                var gValue = colorMap.pixels[index + 1];
                var bValue = colorMap.pixels[index + 2];
                var color1 = color(rValue + rValue, gValue, bValue);
                var color2 = color(bValue, rValue, gValue + rValue)
                var fillColor = color(rValue, gValue, bValue);
                // var fillColorFinish = lerpColor(rValue, gValue, 0.5);
                var fillColor2 = color(color1, color2, fillColor2, 0.8);

                finishArray.push({
                    xPos: x
                    , yPos: y
                    , fill: fillColor2
                });
                startArray.push({
                    xPos: x + random(-randomAmount, randomAmount)
                    , yPos: y + random(-randomAmount, randomAmount)
                    , fill: fillColor
                })
            }
            else if (r  < 150) {
              var rValue = colorMap2.pixels[index];
              var gValue = colorMap2.pixels[index + 1];
              var bValue = colorMap2.pixels[index + 2];
              var fillColor = color(rValue, gValue, bValue);

              finishArray.push({
                  xPos: x
                  , yPos: y
                  , fill: fillColor
              });
              startArray.push({
                  xPos: x + random(-randomAmount, randomAmount)
                  , yPos: y + random(-randomAmount, randomAmount)
                  , fill: fillColor
              })
            }

        }
    }
}

function draw() {
    background(0, 20);

    noFill();
    noStroke();

    for (var i = 0; i < finishArray.length - 1; i++) {
        if (filled == 1) {
            noStroke;
            fill(finishArray[i].fill);
        }
        else {
            //console.log("no Fill")
            noFill();
            stroke(finishArray[i].fill);

        }
        //stroke(finishArray[i].fill)
        //fill(finishArray[i].fill);

        var lerpAmount = (counter / finishArray.length) * stepAmount;
        //console.log(lerpAmount)
        if (lerpAmount > 1) {
            lerpAmount = 1
        }
        var xPos = lerp(startArray[i].xPos, finishArray[i].xPos, lerpAmount);
        var yPos = lerp(startArray[i].yPos, finishArray[i].yPos, lerpAmount);

        ellipse(xPos, yPos, circleSize, circleSize);

    }

    if (counterDir === true & animate == true) {
        if (counter * stepAmount < finishArray.length) {
            counter++;
        }
        else {
            //console.log()
            counterDir = false;
            counter--;

        }
    }
    else {
        if (counter * stepAmount > 0) {
            counter--;
        }
        else {
            counterDir = true;
            //update();
        }
    }

}

function update() {
    circleSize = circleSlider.value();
    pointDensity = densitySlider.value();
    fontSize = fontSizeSlider.value();
    randomAmount = randomSlider.value();
    textTyped = inputBox.value();

    if (checkBox.checked() == true) {
        filled = true;
    }
    else {
        filled = false;
    }

    if (animateBox.checked() == true) {
        animate = true;
    }
    else {
        animate = false;
    }

    finishArray = [];
    startArray = [];
    createTextGraphic();
    createArrays();
    counter = 0;
}

function keyReleased() {
    // export png
    if (keyCode == CONTROL) saveCanvas(gd.timestamp(), 'png');
}
