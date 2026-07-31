# Particle Architecture

## Overview

A particle is the smallest simulation unit in ParticleOS.

Particles do not contain simulation logic. They are lightweight data objects that store state required by the simulation and renderer.

---

# Design Goals

Particles should be:

- Lightweight
- Fast
- Reusable
- Easy to update
- Cache friendly
- Suitable for object pooling

Particles should avoid unnecessary memory allocations.

---

# Particle Lifecycle

```
Create

↓

Spawn

↓

Alive

↓

Updated Every Frame

↓

Lifetime Ends

↓

Reset

↓

Return To Pool
```

Particles are never destroyed during normal simulation.

Instead, they are returned to the particle pool and reused.

---

# Particle State

Every particle contains only simulation data.

Example fields:

```ts
active

position

velocity

acceleration

rotation

angularVelocity

size

color

age

lifetime
```

Future versions may also include:

```ts
mass

drag

temperature

customData
```

---

# Responsibilities

A Particle is responsible for:

- Storing simulation state
- Tracking lifetime
- Being reset for reuse

A Particle is NOT responsible for:

- Rendering
- Spawning new particles
- Applying forces
- Updating itself

Those responsibilities belong to other engine components.

---

# Memory Layout

Particles should be stored inside a ParticlePool.

```
ParticlePool

├── Particle
├── Particle
├── Particle
├── Particle
├── Particle
└── ...
```

The engine should reuse existing particles instead of creating new objects every frame.

---

# Object Pooling

Object pooling is mandatory.

Example flow:

```
Acquire Particle

↓

Initialize

↓

Simulation

↓

Lifetime Ends

↓

Reset

↓

Return To Pool
```

This minimizes garbage collection and improves runtime performance.

---

# Simulation Flow

Every simulation frame follows this order:

```
Spawn

↓

Apply Forces

↓

Update Velocity

↓

Update Position

↓

Execute Behaviors

↓

Increase Age

↓

Check Lifetime

↓

Return Dead Particles To Pool
```

---

# CPU vs GPU Responsibilities

## CPU

Responsible for:

- Spawn
- Lifetime
- Behaviors
- Forces
- Scheduling

---

## GPU

Responsible for:

- Rendering
- Instancing
- Buffer uploads
- Shader execution

Future versions may move simulation to the GPU.

---

# Public API

Particles should never be created directly by users.

Incorrect:

```ts
const particle = new Particle();
```

Correct:

```ts
const particle = pool.acquire();
```

The ParticlePool is the only component allowed to allocate particles.

---

# Future Optimizations

Future versions may introduce:

- Struct-of-Arrays (SoA) storage
- TypedArray-backed particles
- GPU simulation buffers
- Parallel simulation
- Worker thread simulation

The public API should remain stable even if the internal storage changes.