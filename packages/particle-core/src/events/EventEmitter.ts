export type EventListener<T = unknown> = (payload: T) => void;

export class EventEmitter {
    private readonly listeners = new Map<string, Set<EventListener>>();

    on<T = unknown>(event: string, listener: EventListener<T>): void {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, new Set());
        }

        this.listeners.get(event)!.add(listener as EventListener);
    }

    off<T = unknown>(event: string, listener: EventListener<T>): void {
        this.listeners.get(event)?.delete(listener as EventListener);

        if (this.listeners.get(event)?.size === 0) {
            this.listeners.delete(event);
        }
    }

    emit<T = unknown>(event: string, payload?: T): void {
        const listeners = this.listeners.get(event);

        if (!listeners) {
            return;
        }

        for (const listener of listeners) {
            listener(payload);
        }
    }

    clear(): void {
        this.listeners.clear();
    }
}