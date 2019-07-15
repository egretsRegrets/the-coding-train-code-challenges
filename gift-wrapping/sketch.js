let points = Array.from(Array(100));
const hull = [];

let checking;
let leftmost;
let currentVertex;
let pIndex;
let nextPIndex = -1;
let nextVertex;

function setup() {
    createCanvas(500, 500);
    let padding = 20;
    points = points.map(_ => createVector(random(padding, width - padding), random(padding, height - padding)));
    points.sort((pA, pB) => pA.x - pB.x);
    leftmost = points[0];
    currentVertex = leftmost;
    hull.push(currentVertex);
    nextVertex = points[1];
    pIndex = 2;
}

function draw() {
    background(0);

    drawPoints();
    drawHullShape();
    drawLeftmost();
    drawCurrentVertex();

    drawNewHullLine();

    checking = points[pIndex];
    drawCheckingLine();

    if (checkingIsNextVertex()) {
        nextVertex = checking;
        nextIndex = pIndex;
    }

    pIndex = pIndex + 1;

    if (pIndex === points.length) {
        if (nextVertex === leftmost) {
            console.log('finished');
            noLoop();
        } else {
            hull.push(nextVertex);
            currentVertex = nextVertex;
            pIndex = 0;
            nextVertex = leftmost;
        }
    }
}

// utils
function checkingIsNextVertex() {
    const lastLine = p5.Vector.sub(nextVertex, currentVertex);
    const checkingLine = p5.Vector.sub(checking, currentVertex);
    const crossProduct = lastLine.cross(checkingLine);
    return crossProduct.z < 0;
}
function drawCheckingLine() {
    stroke(255);
    strokeWeight(2);
    line(currentVertex.x, currentVertex.y, checking.x, checking.y);
}
function drawCurrentVertex() {
    stroke(255, 0, 255);
    strokeWeight(32);
    point(currentVertex.x, currentVertex.y);
}
function drawHullShape() {
    stroke(0, 0, 255);
    fill(0, 0, 255, 50);
    beginShape();
    hull.forEach(p => vertex(p.x, p.y));
    endShape(CLOSE);
}
function drawLeftmost() {
    stroke(0, 255, 0);
    strokeWeight(32);
    point(leftmost.x, leftmost.y);
}
function drawNewHullLine() {
    stroke(0, 255, 0);
    strokeWeight(2);
    line(currentVertex.x, currentVertex.x, nextVertex.x, nextVertex.y);
}
function drawPoints() {
    stroke(255);
    strokeWeight(8);
    points.forEach(p => {
        
        point(p.x, p.y);
    });
}