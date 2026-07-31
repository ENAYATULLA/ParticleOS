import { Particle } from "../particle";

/**
 * Defines how a particle is spawned.
 */
export interface EmitterShape {
    spawn(particle: Particle): void;
}