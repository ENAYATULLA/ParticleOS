export type UpdateCallback = (deltaTime: number) => void;
export type RenderCallback = () => void;

export class GameLoop {
    private lastTime = 0;

    private animationFrameId = 0;

    private readonly update: UpdateCallback;

    private readonly render: RenderCallback;

    public constructor(
        update: UpdateCallback,
        render: RenderCallback
    ) {
        this.update = update;
        this.render = render;
    }

    public start(): void {
        this.lastTime = performance.now();

        this.animationFrameId = requestAnimationFrame(this.loop);
    }

    public stop(): void {
        cancelAnimationFrame(this.animationFrameId);
    }

    private readonly loop = (currentTime: number): void => {
        const deltaTime = (currentTime - this.lastTime) / 1000;

        this.lastTime = currentTime;

        this.update(deltaTime);
        this.render();

        this.animationFrameId = requestAnimationFrame(this.loop);
    };
}