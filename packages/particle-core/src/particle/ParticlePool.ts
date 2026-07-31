import { Particle } from "./Particle";

export class ParticlePool {
    private readonly particles: Particle[];

    private readonly available: number[] = [];

    private activeCount = 0;

    public constructor(maxParticles: number) {
        this.particles = Array.from(
            { length: maxParticles },
            () => new Particle()
        );

        for (let i = 0; i < maxParticles; i++) {
            this.available.push(i);
        }
    }

    public create(): Particle | null {
        const index = this.available.pop();

        if (index === undefined) {
            return null;
        }

        const particle = this.particles[index];

        if (!particle) {
            return null;
        }

        particle.active = true;
        this.activeCount++;

        return particle;
    }

    public release(particle: Particle): void {
        const index = this.particles.indexOf(particle);

        if (index === -1 || !particle.active) {
            return;
        }

        particle.active = false;
        this.available.push(index);
        this.activeCount--;
    }

    public getParticles(): readonly Particle[] {
        return this.particles;
    }

    public getActiveParticles(): Particle[] {
        return this.particles.filter((particle) => particle.active);
    }

    public getActiveCount(): number {
        return this.activeCount;
    }

    public getCapacity(): number {
        return this.particles.length;
    }

    public clear(): void {
        this.available.length = 0;
        this.activeCount = 0;

        for (let i = 0; i < this.particles.length; i++) {
            const particle = this.particles[i];

            if (particle) {
                particle.active = false;
            }

            this.available.push(i);
        }
    }
}