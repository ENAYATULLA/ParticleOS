# Public API

## Overview

The public API defines how developers interact with ParticleOS.

It should be simple, intuitive, type-safe, and consistent.

The API should hide internal implementation details while exposing the most commonly used functionality.

---

# Design Principles

The public API should be:

- Simple
- Predictable
- Discoverable
- Type-safe
- Extensible
- Stable

Breaking API changes should be avoided whenever possible.

---

# Basic Usage

A minimal ParticleOS application should look like this.

```ts
import {
    ParticleSystem,
    ParticleEmitter,
    PointEmitter
} from "@particleos/particle-core";

const system = new ParticleSystem();

const emitter = new ParticleEmitter({
    shape: new PointEmitter(),
    rate: 100
});

system.addEmitter(emitter);

system.start();
```

---

# Engine Lifecycle

The ParticleSystem controls the simulation lifecycle.

```ts
system.start();

system.pause();

system.resume();

system.stop();

system.dispose();
```

---

# Emitters

Emitters can be added or removed at runtime.

```ts
system.addEmitter(emitter);

system.removeEmitter(emitter);

system.clearEmitters();
```

---

# Forces

Global forces affect all active particles.

```ts
system.addForce(new GravityForce());

system.addForce(new WindForce());

system.removeForce(gravity);
```

---

# Behaviors

Behaviors modify particle properties during simulation.

```ts
system.addBehavior(new DragBehavior());

system.addBehavior(new ColorOverLifetime());

system.removeBehavior(dragBehavior);
```

---

# Plugins

Additional functionality can be installed using plugins.

```ts
system.use(new DebugPlugin());

system.use(new PhysicsPlugin());
```

---

# Renderer

A renderer is attached separately.

```ts
const renderer = new WebGLRenderer(canvas);

system.setRenderer(renderer);
```

Changing renderers should not require changes to the simulation.

---

# Configuration

The engine should support configuration through an options object.

Example:

```ts
const system = new ParticleSystem({

    maxParticles: 50000,

    fixedTimeStep: true,

    autoStart: false

});
```

Future options may be added without breaking existing code.

---

# Events

The engine may expose lifecycle events.

Examples:

```ts
system.on("start");

system.on("pause");

system.on("stop");

system.on("dispose");
```

Custom events may be added in future versions.

---

# Error Handling

Errors should provide meaningful messages.

Example:

```text
Renderer has not been initialized.

Emitter is already registered.

Maximum particle limit exceeded.
```

The engine should fail gracefully whenever possible.

---

# Design Rules

The public API should:

- Avoid exposing internal classes.
- Prefer composition over inheritance.
- Keep naming consistent.
- Remain backward compatible.
- Be easy to understand for new developers.

---

# Future Extensions

The public API should support:

- Async asset loading
- Scene serialization
- GPU simulation
- Worker thread execution
- Visual editor integration
- Remote debugging

These features should integrate naturally without requiring major API changes.