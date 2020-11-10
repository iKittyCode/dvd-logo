//this is the code
//declaring the global varibles
var x;
var y;
var xspeed;
var yspeed;
var img;
var r, g, b;
//loading the media assests
function preload() {
img = loadImage('https://raw.githubusercontent.com/CodingTrain/website/main/CodingChallenges/CC_131_BouncingDVDLogo/P5/dvd_logo.png')
}
//function setup runs when program starts
function setup() {
// createing the canvas
createCanvas(800, 600)
//giving the global varibles values other than null
y = 400
x = 300
r = random(100, 256)
g = random(100, 256)
b = random(100, 256)
xspeed = 10
yspeed = 10
//declaring the frame rate
frameRate(17)
}
//looping over and over agin
function draw() {
//making the background black
background(0)
//tinting and drawing the image
tint(r,g, b)
image(img, x, y)
//adding the xspeed and the yspeed to x and y
x += xspeed
y += yspeed
//testing if it is on the edge
if (x + img.width >= width || x == 0) {
xspeed = -xspeed
//this is to make the color change
r = random(100, 256)
g = random(100, 256)
b = random(100, 256)
}
if (y  + img.height >= height || y == 0) {
yspeed = -yspeed
//this is to make the color change
r = random(100, 256)
g = random(100, 256)
b = random(100, 256)
}
}
