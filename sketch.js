let ball1;
let ball2;
let ball3;
let ball4;

let img1;
let img2;
let img3;
let img4;
var bg;

function setup() {
 bg = loadImage("images/1.jpg");
  createCanvas(windowWidth, windowHeight);
  img1 = loadImage('images/oprah.jpg');
  img2 = loadImage('images/sherryl.jpg');
  img3 = loadImage('images/us.jpeg');
  img4 = loadImage('images/me.jpg');


  ball1 = new Women(100, 100, 200, 150, img1, 1);
  ball2 = new Women(100, 250, 200, 150, img2, 1);
  ball3 = new Women(100, 400, 100, 100, img3, 3);
  ball4 = new Women(100, 600, 100, 50, img4, 9);
  
}

function draw() {
  background(bg);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();

  ball1.move();
  ball2.move();
  ball3.move();
  ball4.move();

  stroke(255);
strokeWeight(4);
noFill();

if (mouseX <750)   {
    fill (random(0, 255), random(0, 255), random(0, 255));
    ellipse(500, 250, 150, 150)
}  
if (mouseX > 750) {
    // fill(random(0, 255), random(0, 255), random(0, 255));
    // ellipse(900, 500, 500, 500);
        fill (random(0, 255), random(0, 255), random(0, 255));
        ellipse (mouseX, mouseY, 150, 150);
        }       

if (500<mouseX<900) { var i=0;
    for (var i=0; i<=width; i+=50) {
        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipse(i,800, 25, 25) }
    }
}


class Women{
    constructor(tempX, tempY, tempWidth, tempHeight, tempImg, tempSpeed){
        this.x = tempX;
        this.y = tempY;
        this.w = tempWidth;
        this.h = tempHeight;
        this.img = tempImg;
        this.speed = tempSpeed;
    }

    display(){
        image(this.img, this.x, this.y, this.w, this.h);
    }

    move(){
        this.x += this.speed;
        if(this.x > width){
            this.x = 0;
        }
    }
}