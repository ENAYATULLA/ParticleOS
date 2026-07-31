import { Vector3 } from "../math";

export class Particle {
    public readonly position = new Vector3();

    public readonly velocity = new Vector3();

    public radius = 2;

    public active = false;

    public reset(): void {
        this.position.set(0, 0, 0);
        this.velocity.set(0, 0, 0);

        this.radius = 2;
        this.active = false;
    }
}