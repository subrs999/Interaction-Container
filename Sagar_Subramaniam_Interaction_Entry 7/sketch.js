var canvas;

let x = 0.1;
let y = 0;
let z = 0;

let x1 = 0.2;
let y1 = 0;
let z1 = 0;

let x2 = -.2;
let y2 = 0.01;
let z2 = 0;

let a = 0.95;
let b = 0.7;
let c = 0.65;
let d = 3.5;
let e = 0.25;
let f = 0.1;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(80,0, 'fixed');
  canvas.style('z-index', '-1');
  background(0);

}

function draw() {

  
    dt = 0.01;
  
    dx = dt * ((z - b) * x - d*y);
    dy = dt * (d*x+(z-b)*y);
    dz = dt * (c + a*z - (z**3)/3 - (x**2 + y**2)*(1+e*z) + f * z * x**3);
    
    dx1 = dt * ((z1 - b) * x1 - d*y1);
    dy1 = dt * (d*x1+(z1-b)*y1);
    dz1 = dt * (c + a*z1 - (z1**3)/3 - (x1**2 + y1**2)*(1+e*z1) + f * z1 * x1**3);
  
    dx2 = dt * ((z2 - b) * x2 - d*y2);
    dy2 = dt * (d*x2+(z2-b)*y2);
    dz2 = dt * (c + a*z2 - (z2**3)/3 - (x2**2 + y2**2)*(1+e*z2) + f * z2 * x2**3);
  
  x += dx ;
  y += dy ;
  z += dz ;
  
  x1 += dx1 ;
  y1 += dy1 ;
  z1 += dz1 ;
  
  x2 += dx2 ;
  y2 += dy2 ;
  z2 += dz2 ;
  
  scale(200);
	
  push()
  stroke(102, 155, 188, 100)
  translate(x,y,z);
  sphere(0.001)
  pop()
  
  push()
  stroke(253, 240, 215, 100)
  translate(x1,y1,z1);
  sphere(0.001)
  pop()
  
  push()
  stroke(193, 18, 31, 100)
  translate(x2,y2,z2);
  sphere(0.001)
  pop()
  
   camera(800, 0, 0);
}

