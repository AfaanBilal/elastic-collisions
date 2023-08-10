/**
 * Elastic Collisions
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import { Ball } from "./ball";

const canvas = document.getElementById('c') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const D = 800;
const R = 10;
const randomGen = (from: number, to: number) => () => Math.round(from + Math.random() * to);
const random = randomGen(R + 1, D - R - 1);

const colors = [
    'black',
    'silver',
    'gray',
    'white',
    'maroon',
    'red',
    'purple',
    'fuchsia',
    'green',
    'lime',
    'olive',
    'yellow',
    'navy',
    'blue',
    'teal',
    'aqua',
];
const randomColor = () => {
    return colors[randomGen(0, colors.length - 1)()];
};

const balls: Array<Ball> = [];

function setup() {
    balls.push(new Ball({ x: random(), y: random() }, R, randomColor(), { x: 100, y: 100 }));
    balls.push(new Ball({ x: random(), y: random() }, R, randomColor(), { x: 100, y: 100 }));
    balls.push(new Ball({ x: random(), y: random() }, R, randomColor(), { x: 100, y: 100 }));
    balls.push(new Ball({ x: random(), y: random() }, R, randomColor(), { x: 100, y: 100 }));
    balls.push(new Ball({ x: random(), y: random() }, R, randomColor(), { x: 100, y: 100 }));
    balls.push(new Ball({ x: random(), y: random() }, R, randomColor(), { x: 100, y: 100 }));
    balls.push(new Ball({ x: random(), y: random() }, R, randomColor(), { x: 100, y: 100 }));
    balls.push(new Ball({ x: random(), y: random() }, R, randomColor(), { x: 100, y: 100 }));
}

let lastFrameTime = 0;

function update(ts: number) {
    const dt = (ts - lastFrameTime) / 1000;
    lastFrameTime = ts;

    ctx.clearRect(0, 0, D, D);

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
