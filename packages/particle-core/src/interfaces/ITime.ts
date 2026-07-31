export interface ITime {
    readonly deltaTime: number;

    readonly elapsedTime: number;

    readonly frame: number;

    readonly timeScale: number;

    update(deltaTime: number): void;

    reset(): void;

    setTimeScale(scale: number): void;
}