import type { IEmitter } from "../../interfaces";
import { ParticlePool } from "../../particle";

export class SimpleEmitter implements IEmitter {
    private running = true;
    private paused = false;

    public constructor(
        private readonly x: number,
        private readonly y: number,
        private readonly count: number,
        private readonly speed: number = 100
    ) { }

    public start(): void {
        this.running = true;
    }

    public stop(): void {
        this.running = false;
    }

    public pause(): void {
        this.paused = true;
    }

    public resume(): void {
        this.paused = false;
    }

    public emit(pool: ParticlePool, _deltaTime: number): void {
        if (!this.running || this.paused) {
            return;
        }

        for (let i = 0; i < this.count; i++) {
            const particle = pool.create();

            if (!particle) {
                return;
            }

            const angle = Math.random() * Math.PI * 2;

            particle.position.set(this.x, this.y, 0);

            particle.velocity.set(
                Math.cos(angle) * this.speed,
                Math.sin(angle) * this.speed,
                0
            );

            particle.radius = 3;
        }

        // Emit only once
        this.running = false;
    }
}