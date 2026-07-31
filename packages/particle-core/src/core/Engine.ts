import { EventEmitter } from "../events";
import { EngineState } from "../types";
import { ParticlePool } from "../particle";
import { Simulation } from "./Simulation";
import { Time } from "./Time";

export class Engine {
    private readonly time = new Time();

    private readonly events = new EventEmitter();

    private readonly particlePool: ParticlePool;

    private readonly simulation: Simulation;

    private state = EngineState.Idle;

    public constructor(maxParticles = 1000) {
        this.particlePool = new ParticlePool(maxParticles);
        this.simulation = new Simulation(this.particlePool);
    }

    public start(): void {
        if (this.state === EngineState.Running) {
            return;
        }

        this.state = EngineState.Running;
        this.events.emit("start");
    }

    public pause(): void {
        if (this.state !== EngineState.Running) {
            return;
        }

        this.state = EngineState.Paused;
        this.events.emit("pause");
    }

    public resume(): void {
        if (this.state !== EngineState.Paused) {
            return;
        }

        this.state = EngineState.Running;
        this.events.emit("resume");
    }

    public stop(): void {
        if (this.state === EngineState.Stopped) {
            return;
        }

        this.state = EngineState.Stopped;
        this.time.reset();
        this.events.emit("stop");
    }

    public update(deltaTime: number): void {
        if (this.state !== EngineState.Running) {
            return;
        }

        this.time.update(deltaTime);
        this.simulation.update(this.time.deltaTime);
    }

    public dispose(): void {
        this.stop();
        this.events.clear();
        this.state = EngineState.Disposed;
    }

    public getState(): EngineState {
        return this.state;
    }

    public getTime(): Time {
        return this.time;
    }

    public getSimulation(): Simulation {
        return this.simulation;
    }

    public getEvents(): EventEmitter {
        return this.events;
    }

    public getParticlePool(): ParticlePool {
        return this.particlePool;
    }
}