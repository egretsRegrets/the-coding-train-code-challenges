class Unicorn {
    constructor() {
        this.r = 150;
        this.x = 50;
        this.y = height - this.r;
        this.vy = 0;
        this.gravity = 2;
    }

    jump() {
        // update velocity
        this.vy = -25;
    }

    move() {
        // update vertical position by velocity
        this.y += this.vy;
        this.vy += this.gravity;
        // keep vert position within the canvas
        this.y = constrain(this.y, 0, height - this.r);
    }

    show() {
        image(uImg, this.x, this.y, this.r, this.r);
    }
}