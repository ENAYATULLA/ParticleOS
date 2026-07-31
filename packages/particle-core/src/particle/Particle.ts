import { Color, Vector3 } from "../math";

/**
 * Represents a single particle in the simulation.
 */
export class Particle {
    public active = false;

    public position = new Vector3();

    public velocity = new Vector3();

    public acceleration = new Vector3();

    public color = new Color();

    public size = 1;

    public rotation = 0;

    public angularVelocity = 0;

    public lifetime = 0;

    public age = 0;

    public reset(): void {
        this.active = false;

        this.position.zero();
        this.velocity.zero();
        this.acceleration.zero();

        this.color.set(1, 1, 1, 1);

        this.size = 1;
        this.rotation = 0;
        this.angularVelocity = 0;
        this.lifetime = 0;
        this.age = 0;
    }
}