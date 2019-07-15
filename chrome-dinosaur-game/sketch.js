// vars
let unicorn;

// game assets
let uImg;
let tImg;
let bImg;

// p5 lifecycle
function preload() {
    uImg = loadImage('assets/unicorn.png');
    tImg = loadImage('assets/train.png');
    bImg = loadImage('assets/background.jpg');
}
function setup() {
    createCanvas(800, 450);
    unicorn = new Unicorn();
}
function draw() {
    background(bImg);
    unicorn.show(); 
    unicorn.move();
}

// methods
function keyPressed() {
    if (key === ' ') {
        unicorn.jump();
    }
}