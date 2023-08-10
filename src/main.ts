/**
 * Elastic Collisions
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import { Ball } from "./ball";
import { randomPositionComponent, randomColor, randomVelocityComponent, areColliding, R, D } from "./helpers";

const canvas = document.getElementById('c') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const balls: Array<Ball> = [];

function setup() {
    for (let i = 0; i < 10; ++i) {
        balls.push(new Ball(
            { x: randomPositionComponent(), y: randomPositionComponent() },
            R,
            randomColor(),
            { x: randomVelocityComponent(), y: randomVelocityComponent() }
        ));
    }
}

let lastFrameTime = 0;

function update(ts: number) {
    const dt = (ts - lastFrameTime) / 1000;
    lastFrameTime = ts;

    ctx.clearRect(0, 0, D, D);

    for (let i = 0; i < balls.length; ++i) {
        for (let j = i + 1; j < balls.length; ++j) {
            if (areColliding(balls[i], balls[j])) {
                const b1v = structuredClone(balls[i].velocity);

                balls[i].velocity.x = balls[j].velocity.x;
                balls[i].velocity.y = balls[j].velocity.y;

                balls[j].velocity.x = b1v.x;
                balls[j].velocity.y = b1v.y;
            }
        }
    }

    for (let i = 0; i < balls.length; ++i) {
        balls[i].update(dt);
    }

    for (let i = 0; i < balls.length; ++i) {
        balls[i].render(ctx);
    }

    requestAnimationFrame(update);
}

function run() {
    setup();
    requestAnimationFrame(update);
}

run();
