class Unicorn {
    constructor() {
        this.r = 100;
        this.x = 50;
        this.y = height - this.r;
        this.vy = 0;
        this.gravity = 2;
    }

    hits(train) {
        let unicornCenterX = this.x + this.r * 0.5;
        let unicornCenterY = this.y + this.r * 0.5;
        let trainCenterX = train.x + train.r * 0.5;
        let trainCenterY = train.y + train.r * 0.5;

        return collideCircleCircle(unicornCenterX, unicornCenterY, this.r, trainCenterX, trainCenterY, train.r);
    }

    jump() {
        // update velocity
        if (this.y === height - this.r) {
            this.vy = -30;
        }
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