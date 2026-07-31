import { Vector3 } from "../math";

export class Particle {
    public readonly position = new Vector3();

    public readonly velocity = new Vector3();

    public radius = 2;

    public active = false;

    // Lifetime
    public age = 0;

    public lifetime = Infinity;

    // Appearance
    public color = "#ffffff";

    public alpha = 1;

    public reset(): void {
        this.position.set(0, 0, 0);

        this.velocity.set(0, 0, 0);

        this.radius = 2;

        this.active = false;

        this.age = 0;

        this.lifetime = Infinity;

        this.color = "#ffffff";

        this.alpha = 1;
    }

    public isAlive(): boolean {
        return this.age < this.lifetime;
    }

    public getLifeProgress(): number {
        if (this.lifetime === Infinity) {
            return 0;
        }

        return Math.min(
            this.age / this.lifetime,
            1
        );
    }
}