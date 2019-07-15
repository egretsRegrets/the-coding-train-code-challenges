let unicorn;

function setup() {
    createCanvas(600, 450);
    unicorn = new Unicorn();
}

function draw() {
    background(220);
    unicorn.show(); 
}