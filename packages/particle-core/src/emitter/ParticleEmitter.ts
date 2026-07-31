import { Particle } from "../particle";
import { EmitterShape } from "./EmitterShape";
import { PointEmitter } from "./PointEmitter";

/**
 * Emits particles using a configurable shape.
 */
export class ParticleEmitter {
    private shape: EmitterShape;

    constructor(shape: EmitterShape = new PointEmitter()) {
        this.shape = shape;
    }

    public emit(particle: Particle): void {
        this.shape.spawn(particle);
    }

    public setShape(shape: EmitterShape): void {
        this.shape = shape;
    }
}