/**
 * Elastic Collisions
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

export interface Vec2 {
    x: number;
    y: number;
}

export class Ball {
    constructor(public pos: Vec2, public radius: number, public color: string, public velocity: Vec2) {}

    public update(dt: number) {
        if (this.pos.x <= this.radius || this.pos.x >= (800 - this.radius)) {
            this.velocity.x = -this.velocity.x;
        }

        if (this.pos.y <= this.radius || this.pos.y >= (800 - this.radius)) {
            this.velocity.y = -this.velocity.y;
        }

        this.color = 'rgba(255, 0, 0, ' + (Math.abs(this.velocity.x) / 150) + ')';

        this.pos.x += this.velocity.x * dt;
        this.pos.y += this.velocity.y * dt;
    }

    public render(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.fill();
        ctx.stroke();
    }
}
