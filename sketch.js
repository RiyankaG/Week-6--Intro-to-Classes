let oprah;
let sherryl;
let us;
let me;
let star1;
let star2;
let star3;
let star4; 

let img1;
let img2;
let img3;
let img4;
let img5;
var bg;
var shootingStar;

function setup() {
 bg = loadImage("images/1.jpg");
  createCanvas(windowWidth, windowHeight);
  img1 = loadImage('images/oprah.jpg');
  img2 = loadImage('images/sherryl.jpg');
  img3 = loadImage('images/space.jpeg');
  img4 = loadImage('images/tulsi.jpg');
  img5 = loadImage('images/comet.webp');


//   oprah = new Women(100, 100, 200, 150, img1, 1);
//   sherryl = new Women(100, 250, 200, 150, img2, 1);
//   us = new Women(100, 400, 100, 100, img3, 3);
//   me = new Women(100, 600, 100, 50, img4, 9);

star1= new Star(100,100,25,25,img5, 11);
star2= new Star(700,300,25,25,img5, );
star3= new Star(1200,500,25,25,img5, 11);
star4= new Star(500,500,25,25,img5, 11);
shootingStar = new ShootingStar();

}

function draw() {
  background(bg);
  
  star1.display();
  star2.display();
  star3.display();
  star4.display();
  

  star1.move();
  star2.move();
  star3.move();
  star4.move();

  shootingStar.draw();

 for (var i = 0; i < 50; i++) {
   
var x = random(windowWidth);
var y = random(windowHeight-200);
noStroke();
fill(255, 255, 0);
ellipse(x, y, 2, 2);
}



if (mouseX<windowWidth/4){
            image (img1,100,200,300,200)
        }  
if (mouseX>windowWidth*3/4) {
            // fill(random(0, 255), random(0, 255), random(0, 255));
            // ellipse(900, 500, 500, 500);
                // fill (random(0, 255), random(0, 255), random(0, 255));
                // ellipse (mouseX, mouseY, 150, 150);
            image (img3,500,200,500,300)
        }       
        
for (var i=0; i<=width; i+=50) {
    if (mouseX > windowWidth/4 && mouseX < windowWidth*2/4) { 
    image (img2,400,400,300,200) 
              }
          }
for (var i=0; i<=width; i+=50) {
            if (mouseX > windowWidth*2/4 && mouseX < windowWidth*3/4) { 
            // fill(random(0, 255), random(0, 255), random(0, 255));
            // ellipse(i,200, 25, 25) 
            image (img4,700,200,200,300)
                      }
                  }

                }
class Star{
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
        // this.y += this.speed;
        //     if(this.y > width){
        //         this.y = 0;
        }
    }
}

function ShootingStar() {
    this.x = random(windowWidth-200);
    this.y = random(windowHeight-400);
    this.w = 6;
    this.h = 4;
  }
  ShootingStar.prototype.draw = function() {
    noStroke();
    fill(255, 255, 0);
    ellipse(this.x, this.y, this.w, this.h);
    if (this.h > 0) {
      this.h -= 0.5;
    }
    this.w += 7;
    this.x += 5;
  }

  function ShootingStar() {
    this.x = random(windowWidth-200);
    this.y = random(windowHeight-400);
    this.w = 6;
    this.h = 4;
  }

  ShootingStar.prototype.draw = function() {
    noStroke();
    fill(255, 255, 0);
    ellipse(this.x, this.y, this.w, this.h);
    if (this.h > 0) {
      this.h -= 0.5;
    }
    this.w += 7;
    this.x += 5;
  }
// class Women{
//     constructor(tempX, tempY, tempWidth, tempHeight, tempImg, tempSpeed){
//         this.x = tempX;
//         this.y = tempY;
//         this.w = tempWidth;
//         this.h = tempHeight;
//         this.img = tempImg;
//         this.speed = tempSpeed;
//     }

//     display(){
//         image(this.img, this.x, this.y, this.w, this.h);
//     }

//     move(){
//         this.x += this.speed;
//         if(this.x > width){
//             this.x = 0;
//         }
//     }
// }
