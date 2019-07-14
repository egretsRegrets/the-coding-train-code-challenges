let points;
let hull;

let leftmost;
let currentVertex;
let pIndex = 0;
let nextVertex;

function setup() {
    createCanvas(500, 500);
    points = Array.from(Array(10), _ => createVector(random(width - 10), random(height - 10)));
    leftmost = points.sort((pA, pB) => pA.x - pB.x)[0];
}

function draw() {
    background(0);
    
    strokeWeight(8);

    points.forEach(p => {
        p === leftmost ? drawLeftmostPoint(p) : drawDefaultPoint(p);
    });
}

// utility methods
function drawDefaultPoint(p) {
    stroke(255);
    strokeWeight(8);
    point(p.x, p.y);
}
function drawLeftmostPoint(p) {
    stroke(0, 255, 0);
    strokeWeight(20);
    point(p.x, p.y);
}