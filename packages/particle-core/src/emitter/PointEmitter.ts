import { Particle } from "../particle";
import { EmitterShape } from "./EmitterShape";

/**
 * Spawns all particles from a single point.
 */
export class PointEmitter implements EmitterShape {
    public spawn(particle: Particle): void {
        particle.position.set(0, 0, 0);
    }
}