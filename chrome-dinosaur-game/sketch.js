// vars
let unicorn;

// game assets
let uImg;
let tImg;
let bImg;

let trains = [];

let soundClassifier;

// p5 lifecycle
function preload() {
    soundClassifier = ml5.soundClassifier(
        'SpeechCommands18w', 
        { probabilityThreshold: 0.95 }
    );
    uImg = loadImage('assets/unicorn.png');
    tImg = loadImage('assets/train.png');
    bImg = loadImage('assets/background.jpg');
}
function setup() {
    createCanvas(800, 450);
    unicorn = new Unicorn();
    soundClassifier.classify(gotCommand)
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
function gotCommand(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results[0].label, results[0].confidence);
    if (results[0].label === 'up') {
        unicorn.jump();
    }
}
function keyPressed() {
    if (key === ' ') {
        unicorn.jump();
    }
}