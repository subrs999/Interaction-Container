var t = 0;
var bezierArray = [];
var canvas;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function setup() {
  
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0, 'fixed');
  canvas.style('z-index', '-1');

  strokeWeight(3);
  noFill();
  frameRate(60);
}

function draw() {
  background(0, 20, 40);
  
  var x1 = width * noise(t + 15);
  var x2 = width * noise(t + 25);
  var x3 = width * noise(t + 35);
  var x4 = mouseX
  var y1 = height * noise(t + 55);
  var y2 = height * noise(t + 65);
  var y3 = height * noise(t + 75);
  var y4 = mouseY

  bezierArray.push(new Bezier(x1, y1, x2, y2, x3, y3, x4, y4));
  
  for (i=0; i<bezierArray.length; i++) {
    bezierArray[i].show(t);
  }
  
  if (bezierArray.length > 100) {
    bezierArray.shift();
  }
  
  t += (0.005);
  
}

function Bezier(x1, y1, x2, y2, x3, y3, x4, y4) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.x3 = x3;
  this.y3 = y3;
  this.x4 = x4;
  this.y4 = y4;
  this.t = t;
  let mouseSpeed = abs(winMouseX - pwinMouseX);
  
  this.show = function(currentT) {
    var _ratio = t / currentT;
    _alpha = map(_ratio, 0, 1, 0, 100); 
    stroke((mouseSpeed * 15), (250 - (mouseSpeed * 10)), 150, _alpha);
  
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  }
}