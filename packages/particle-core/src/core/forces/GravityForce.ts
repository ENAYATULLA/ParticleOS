import type { IForce } from "../../interfaces";
import type { Particle } from "../../particle";

export class GravityForce implements IForce {
    public constructor(
        private readonly gravity: number = 300
    ) { }

    public apply(
        particle: Particle,
        deltaTime: number
    ): void {
        particle.velocity.y +=
            this.gravity * deltaTime;
    }
}