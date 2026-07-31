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
    private readonly particlePool: ParticlePool;

    private readonly emitterManager: EmitterManager;

    private readonly behaviorManager = new BehaviorManager();

    private readonly forceManager = new ForceManager();

    public constructor(
        particlePool: ParticlePool
    ) {
        this.particlePool = particlePool;

        this.emitterManager = new EmitterManager(
            particlePool
        );
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

        const particles =
            this.particlePool.getActiveParticles();

        for (const particle of particles) {
            particle.position.x +=
                particle.velocity.x * deltaTime;

            particle.position.y +=
                particle.velocity.y * deltaTime;

            particle.position.z +=
                particle.velocity.z * deltaTime;
        }
    }

    public getParticlePool(): ParticlePool {
        return this.particlePool;
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