import type { IBehavior } from "../../interfaces";
import { Particle } from "../../particle";

export class BehaviorManager {
    private readonly behaviors: IBehavior[] = [];

    public add(behavior: IBehavior): void {
        this.behaviors.push(behavior);
    }

    public remove(behavior: IBehavior): void {
        const index = this.behaviors.indexOf(behavior);

        if (index !== -1) {
            this.behaviors.splice(index, 1);
        }
    }

    public update(particle: Particle, deltaTime: number): void {
        for (const behavior of this.behaviors) {
            behavior.update(particle, deltaTime);
        }
    }

    public clear(): void {
        this.behaviors.length = 0;
    }

    public getAll(): readonly IBehavior[] {
        return this.behaviors;
    }
}