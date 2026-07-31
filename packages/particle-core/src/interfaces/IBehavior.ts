import type { Particle } from "../particle";

export interface IBehavior {
    update(particle: Particle, deltaTime: number): void;
}