// vars
let unicorn;

// game assets
let uImg;
let tImg;
let bImg;

let trains = [];

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
    if (random(1) < 0.003) {
        trains.push(new Train())
    }

    background(bImg);

    trains.forEach(t => {
        t.move();
        t.show();
        if (unicorn.hits(t)) {
            console.log('Game Over!');
            noLoop();
        }
    })

    unicorn.show(); 
    unicorn.move();
}

// methods
function keyPressed() {
    if (key === ' ') {
        unicorn.jump();
    }
}