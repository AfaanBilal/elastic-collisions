/**
 * Elastic Collisions
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import { Vec2, Ball } from "./ball";

export const D = 800;
export const R = 10;

export const randomGen = (from: number, to: number) => () => Math.floor(from + Math.random() * to);

export const randomPositionComponent = randomGen(2 * R, D - (2 * R));

export const randomVelocityComponent = randomGen(-150, 150);

export const distance = (p1: Vec2, p2: Vec2) => {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
};

export const areColliding = (b1: Ball, b2: Ball) => distance(b1.pos, b2.pos) <= (b1.radius + b2.radius);

export const areCollidingOptimized = (b1: Ball, b2: Ball) => {
    const rSum = b1.radius + b2.radius;

    const dx = b1.pos.x - b2.pos.x;
    const dy = b1.pos.y - b2.pos.y;

    return (rSum * rSum) >= (dx * dx + dy * dy);
};

export const inTheWall = (b: Ball) => b.pos.x <= R || b.pos.x >= (D - R) || b.pos.y <= R || b.pos.y >= (D - R);

const colors = [
    'black',
    'silver',
    'maroon',
    'red',
    'purple',
    'fuchsia',
    'green',
    'lime',
    'olive',
    'navy',
    'blue',
    'teal',
    'aqua',
];

export const randomColor = () => {
    return colors[randomGen(0, colors.length - 1)()];
};
