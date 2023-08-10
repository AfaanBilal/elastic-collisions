/**
 * Elastic Collisions
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import { Ball } from "./ball";
import { randomPositionComponent, randomColor, randomVelocityComponent, areColliding, R, D, inTheWall } from "./helpers";

const canvas = document.getElementById('c') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const balls: Array<Ball> = [];

function setup(n = 10) {
    for (let i = 0; i < n; ++i) {
        let ball;
        let isColliding = false;
        let maxChecks = 10;

        do {
            isColliding = false;

            ball = new Ball(
                { x: randomPositionComponent(), y: randomPositionComponent() },
                R,
                randomColor(),
                { x: randomVelocityComponent(), y: randomVelocityComponent() }
            );

            if (inTheWall(ball)) {
                isColliding = true;
            } else {
                for (let j = 0; j < balls.length; j++) {
                    if (areColliding(balls[j], ball)) {
                        isColliding = true;
                        break;
                    }
                }
            }

            maxChecks--;
        } while (isColliding && maxChecks);

        balls.push(ball);
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
    setup(50);
    requestAnimationFrame(update);
}

run();
