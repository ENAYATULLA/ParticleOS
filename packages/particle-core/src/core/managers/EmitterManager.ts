import type { IEmitter } from "../../interfaces";
import { ParticlePool } from "../../particle";

export class EmitterManager {
    private readonly emitters: IEmitter[] = [];

    public constructor(
        private readonly particlePool: ParticlePool
    ) { }

    public add(emitter: IEmitter): void {
        this.emitters.push(emitter);
    }

    public remove(emitter: IEmitter): void {
        const index = this.emitters.indexOf(emitter);

        if (index !== -1) {
            this.emitters.splice(index, 1);
        }
    }

    public update(deltaTime: number): void {
        for (const emitter of this.emitters) {
            emitter.emit(this.particlePool, deltaTime);
        }
    }

    public clear(): void {
        this.emitters.length = 0;
    }

    public getAll(): readonly IEmitter[] {
        return this.emitters;
    }
}