/**
 * Represents a 2D vector.
 */
export class Vector2 {
    public x: number;
    public y: number;

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    public set(x: number, y: number): this {
        this.x = x;
        this.y = y;
        return this;
    }

    public copy(vector: Vector2): this {
        this.x = vector.x;
        this.y = vector.y;
        return this;
    }

    public clone(): Vector2 {
        return new Vector2(this.x, this.y);
    }

    public add(vector: Vector2): this {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }

    public subtract(vector: Vector2): this {
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
    }

    public multiplyScalar(scalar: number): this {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    public length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    public normalize(): this {
        const length = this.length();

        if (length > 0) {
            this.multiplyScalar(1 / length);
        }

        return this;
    }

    public zero(): this {
        this.x = 0;
        this.y = 0;
        return this;
    }
}