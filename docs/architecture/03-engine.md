# Core Engine

## Overview

The core engine is the heart of ParticleOS.

It is responsible for coordinating the simulation but does not perform rendering or physics directly.

---

# Responsibilities

The engine is responsible for:

- Managing particle systems
- Managing emitters
- Running the simulation loop
- Updating particles
- Executing behaviors
- Applying forces
- Invoking the renderer
- Managing plugins

---

# Not Responsible For

The engine should never:

- Render graphics directly
- Perform UI logic
- Load textures
- Compile shaders
- Handle browser events

These responsibilities belong to other packages.

---

# Main Components

```
ParticleSystem
│
├── Simulation
├── Emitters
├── Forces
├── Behaviors
├── Renderer
├── Plugin Manager
└── Time
```

---

# ParticleSystem

The ParticleSystem is the public entry point.

Example:

```ts
const system = new ParticleSystem();

system.addEmitter(emitter);

system.start();
```

---

# Public API

```ts
class ParticleSystem {

    start()

    stop()

    pause()

    resume()

    update(deltaTime)

    addEmitter()

    removeEmitter()

    clearEmitters()

    addForce()

    removeForce()

    addBehavior()

    removeBehavior()

    use(plugin)

}
```

---

# Internal Flow

```
Start

↓

Simulation

↓

Emitters

↓

Particle Pool

↓

Forces

↓

Behaviors

↓

Renderer

↓

Frame Complete
```

---

# Design Rules

- One ParticleSystem manages one simulation.
- Multiple ParticleSystems may exist simultaneously.
- ParticleSystem does not know which renderer implementation is used.
- ParticleSystem communicates only through interfaces.

---

# Future Extensions

The core engine should support:

- CPU Simulation
- GPU Simulation
- Fixed Time Step
- Variable Time Step
- Parallel Simulation
- Worker Thread Simulation