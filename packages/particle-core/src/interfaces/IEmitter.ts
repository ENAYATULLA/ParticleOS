import type { ParticlePool } from "../particle";

export interface IEmitter {
    start(): void;

    stop(): void;

    pause(): void;

    resume(): void;

    emit(pool: ParticlePool, deltaTime: number): void;
}