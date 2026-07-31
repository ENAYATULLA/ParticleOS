import { EventEmitter } from "../events";
import { ParticlePool } from "../particle";
import { EngineState, type ParticleSystemOptions } from "../types";
import { Engine } from "./Engine";
import { Simulation } from "./Simulation";
import { Time } from "./Time";

import type { SpawnOptions } from "../types";
import type {
    IEmitter,
    IForce,
} from "../interfaces";

export class ParticleSystem {
    private readonly engine: Engine;

    public constructor(options: ParticleSystemOptions = {}) {
        this.engine = new Engine(
            options.maxParticles ?? 1000
        );

        if (options.timeScale !== undefined) {
            this.engine
                .getTime()
                .setTimeScale(options.timeScale);
        }

        if (options.autoStart) {
            this.start();
        }
    }

    public start(): void {
        this.engine.start();
    }

    public pause(): void {
        this.engine.pause();
    }

    public resume(): void {
        this.engine.resume();
    }

    public stop(): void {
        this.engine.stop();
    }

    public update(deltaTime: number): void {
        this.engine.update(deltaTime);
    }

    public dispose(): void {
        this.engine.dispose();
    }

    public getState(): EngineState {
        return this.engine.getState();
    }

    public getTime(): Time {
        return this.engine.getTime();
    }

    public getEvents(): EventEmitter {
        return this.engine.getEvents();
    }

    public getParticlePool(): ParticlePool {
        return this.engine.getParticlePool();
    }

    public getSimulation(): Simulation {
        return this.engine.getSimulation();
    }

    public spawn(options: SpawnOptions): boolean {
        const particle =
            this.engine.getParticlePool().create();

        if (!particle) {
            return false;
        }

        particle.position.set(
            options.x,
            options.y,
            0
        );

        particle.velocity.set(
            options.vx ?? 0,
            options.vy ?? 0,
            0
        );

        particle.radius =
            options.radius ?? 2;

        particle.lifetime =
            options.lifetime ?? Infinity;

        return true;
    }

    public getActiveParticles() {
        return this.engine
            .getParticlePool()
            .getActiveParticles();
    }

    public addEmitter(
        emitter: IEmitter
    ): void {
        this.engine
            .getSimulation()
            .addEmitter(emitter);
    }

    // ✅ NEW
    public addForce(
        force: IForce
    ): void {
        this.engine
            .getSimulation()
            .addForce(force);
    }

    public setWorldBounds(
        width: number,
        height: number
    ): void {
        this.engine
            .getSimulation()
            .setWorldBounds(width, height);
    }
}