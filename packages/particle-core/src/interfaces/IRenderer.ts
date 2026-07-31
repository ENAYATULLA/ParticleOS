export interface IRenderer {
    initialize(): void;

    render(): void;

    resize(width: number, height: number): void;

    dispose(): void;
}