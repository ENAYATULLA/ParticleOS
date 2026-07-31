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
    private worldWidth = Infinity;

    private worldHeight = Infinity;

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
            // Apply Forces
            this.forceManager.update(
                particle,
                deltaTime
            );

            // Velocity Integration
            particle.position.x +=
                particle.velocity.x * deltaTime;

            particle.position.y +=
                particle.velocity.y * deltaTime;

            particle.position.z +=
                particle.velocity.z * deltaTime;

            // World Bounds Collision
            if (particle.position.x < 0) {
                particle.position.x = 0;
                particle.velocity.x *= -1;
            }

            if (particle.position.x > this.worldWidth) {
                particle.position.x = this.worldWidth;
                particle.velocity.x *= -1;
            }

            if (particle.position.y < 0) {
                particle.position.y = 0;
                particle.velocity.y *= -1;
            }

            if (particle.position.y > this.worldHeight) {
                particle.position.y = this.worldHeight;
                particle.velocity.y *= -1;
            }

            // Lifetime
            particle.age += deltaTime;

            // Appearance over lifetime


            if (!particle.isAlive()) {
                this.particlePool.release(particle);
            }
        }
    }

    public setWorldBounds(
        width: number,
        height: number
    ): void {
        this.worldWidth = width;
        this.worldHeight = height;
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