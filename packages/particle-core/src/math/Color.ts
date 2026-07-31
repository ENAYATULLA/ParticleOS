/**
 * RGBA color.
 */
export class Color {
    public r: number;
    public g: number;
    public b: number;
    public a: number;

    constructor(r = 1, g = 1, b = 1, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    public set(r: number, g: number, b: number, a = this.a): this {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        return this;
    }

    public copy(color: Color): this {
        this.r = color.r;
        this.g = color.g;
        this.b = color.b;
        this.a = color.a;
        return this;
    }

    public clone(): Color {
        return new Color(this.r, this.g, this.b, this.a);
    }
}