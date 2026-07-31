import type { ITime } from "../interfaces";

export class Time implements ITime {
    public deltaTime = 0;

    public elapsedTime = 0;

    public timeScale = 1;

    public frame = 0;

    public update(deltaTime: number): void {
        this.deltaTime = deltaTime * this.timeScale;

        this.elapsedTime += this.deltaTime;

        this.frame++;
    }

    public reset(): void {
        this.deltaTime = 0;

        this.elapsedTime = 0;

        this.frame = 0;
    }

    public setTimeScale(scale: number): void {
        this.timeScale = Math.max(0, scale);
    }
}