import type { IForce } from "../../interfaces";
import { Particle } from "../../particle";

export class ForceManager {
    private readonly forces: IForce[] = [];

    public add(force: IForce): void {
        this.forces.push(force);
    }

    public remove(force: IForce): void {
        const index = this.forces.indexOf(force);

        if (index !== -1) {
            this.forces.splice(index, 1);
        }
    }

    public update(particle: Particle, deltaTime: number): void {
        for (const force of this.forces) {
            force.apply(particle, deltaTime);
        }
    }

    public clear(): void {
        this.forces.length = 0;
    }

    public getAll(): readonly IForce[] {
        return this.forces;
    }
}