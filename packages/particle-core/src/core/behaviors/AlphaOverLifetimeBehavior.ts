import type { IBehavior } from "../../interfaces";
import type { Particle } from "../../particle";

export class AlphaOverLifetimeBehavior
    implements IBehavior {

    public update(
        particle: Particle,
        _deltaTime: number
    ): void {
        particle.alpha =
            1 - particle.getLifeProgress();
    }
}