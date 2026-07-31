import type { ParticleSystem } from "../core/ParticleSystem";

export interface IPlugin {
    readonly name: string;

    readonly version: string;

    install(system: ParticleSystem): void;

    dispose?(): void;
}