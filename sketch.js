
var hr;
var min;
var sec;

var hrangle;
var minangle;
var secangle;




function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background("yellow");  
  translate(200,200)
  rotate(-90)
  hr = hour()
  min = minute()
  sec = second()
  strokeWeight(8)
  stroke(25,100,255)
  noFill()
secangle = map(sec,0,60,0,360)
arc(0,0,300,300,0,secangle)

stroke(150,100,255)
minangle = map(min,0,60,0,360)
arc(0,0,280,280,0,minangle)


stroke(150,255,100)
hrangle = map( hr% 12,0,12,360)
arc (0,0,260,260,0,hrangle)
push()
rotate(secangle)
stroke(255,100,150)
line(0,0,100,0)
pop()

push()
rotate(minangle)
stroke(150,100,255)
line(0,0,75,0)
pop()

push()
rotate(hrangle)
stroke(150,255,100)
line(0,0,50,0)
pop()

stroke(255)
point(0,0)

  
  

  drawSprites();
}