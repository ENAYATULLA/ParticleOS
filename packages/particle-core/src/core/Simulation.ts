import type {
    IBehavior,
    IEmitter,
    IForce,
} from "../interfaces";

import { ParticlePool } from "../particle";

import {
    BehaviorManager,
    EmitterManager,
    ForceManager,
} from "./managers";

export class Simulation {
    private readonly emitterManager: EmitterManager;

    private readonly behaviorManager = new BehaviorManager();

    private readonly forceManager = new ForceManager();

    public constructor(
        particlePool: ParticlePool
    ) {
        this.emitterManager = new EmitterManager(particlePool);
    }

    public addEmitter(emitter: IEmitter): void {
        this.emitterManager.add(emitter);
    }

    public addBehavior(behavior: IBehavior): void {
        this.behaviorManager.add(behavior);
    }

    public addForce(force: IForce): void {
        this.forceManager.add(force);
    }

    public update(deltaTime: number): void {
        this.emitterManager.update(deltaTime);

        // Full particle simulation pipeline
        // will be implemented in the next phase.
    }

    public getEmitterManager(): EmitterManager {
        return this.emitterManager;
    }

    public getBehaviorManager(): BehaviorManager {
        return this.behaviorManager;
    }

    public getForceManager(): ForceManager {
        return this.forceManager;
    }
}