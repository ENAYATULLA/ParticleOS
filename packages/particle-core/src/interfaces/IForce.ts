import type { Particle } from "../particle";

export interface IForce {
    apply(particle: Particle, deltaTime: number): void;
}