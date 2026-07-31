export class CanvasRenderer {
    private readonly canvas: HTMLCanvasElement;

    private readonly context: CanvasRenderingContext2D;

    public constructor(container: HTMLElement) {
        this.canvas = document.createElement("canvas");

        const context = this.canvas.getContext("2d");

        if (!context) {
            throw new Error("Unable to create 2D context.");
        }

        this.context = context;

        container.appendChild(this.canvas);

        this.resize();

        window.addEventListener("resize", () => this.resize());
    }

    private resize(): void {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    public clear(color = "#0d1117"): void {
        this.context.fillStyle = color;
        this.context.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );
    }

    public drawCircle(
        x: number,
        y: number,
        radius: number,
        color = "#ffffff"
    ): void {
        this.context.fillStyle = color;

        this.context.beginPath();

        this.context.arc(
            x,
            y,
            radius,
            0,
            Math.PI * 2
        );

        this.context.fill();
    }

    public drawText(
        text: string,
        x: number,
        y: number,
        color = "#00ff99"
    ): void {
        this.context.fillStyle = color;
        this.context.font = "16px monospace";

        this.context.fillText(text, x, y);
    }

    public get width(): number {
        return this.canvas.width;
    }

    public get height(): number {
        return this.canvas.height;
    }
}