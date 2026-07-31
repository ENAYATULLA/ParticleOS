# Simulation Architecture

## Overview

The simulation system is responsible for updating every active particle over time.

It coordinates emitters, forces, behaviors, and particle lifecycles.

The simulation does not perform rendering.

---

# Responsibilities

The simulation is responsible for:

- Updating particles
- Applying forces
- Executing behaviors
- Managing particle lifetime
- Updating positions
- Scheduling simulation steps

---

# Not Responsible For

The simulation should never:

- Render graphics
- Spawn UI elements
- Handle browser events
- Compile shaders

---

# Simulation Flow

Each frame follows the same sequence.

```
Begin Frame

↓

Spawn New Particles

↓

Apply Forces

↓

Integrate Velocity

↓

Integrate Position

↓

Execute Behaviors

↓

Update Lifetime

↓

Recycle Dead Particles

↓

Prepare Render Data

↓

End Frame
```

---

# Delta Time

Every update receives a delta time value.

```ts
system.update(deltaTime);
```

Delta time is measured in seconds.

Example:

```
60 FPS

deltaTime = 0.01667
```

---

# Time Modes

## Variable Time Step

Updates use the actual elapsed time.

Advantages:

- Simple
- Responsive

Disadvantages:

- Simulation differences across frame rates

---

## Fixed Time Step

Updates use a constant interval.

Example:

```
1 / 60 seconds
```

Advantages:

- Deterministic
- Stable simulation

Future versions should support both modes.

---

# Time Scaling

The simulation should support time scaling.

Example:

```ts
system.timeScale = 0.5;
```

Examples:

```
0.5

↓

Half Speed

------------------

1.0

↓

Normal Speed

------------------

2.0

↓

Double Speed
```

---

# Pause

Simulation should support pausing.

```ts
system.pause();

system.resume();
```

Paused simulations should not update particles.

---

# Scheduling

The simulation controls:

- Spawn timing
- Burst timing
- Delayed events
- Repeating events

Future versions may expose a scheduler API.

---

# Parallel Simulation

Future versions should support:

- Worker Threads
- OffscreenCanvas
- SharedArrayBuffer
- Multi-core execution

The public API should remain unchanged.

---

# GPU Simulation

Future versions may move simulation to the GPU.

Example:

```
CPU

↓

Generate Commands

↓

GPU Compute

↓

GPU Buffers

↓

Renderer
```

This optimization should not require API changes.

---

# Design Rules

- One simulation per ParticleSystem
- Deterministic update order
- Stable execution pipeline
- Minimal memory allocations
- Predictable frame execution

---

# Public API

Example:

```ts
system.start();

system.pause();

system.resume();

system.stop();

system.update(deltaTime);
```

---

# Future Extensions

The simulation architecture should allow:

- GPU compute simulation
- Deterministic replay
- Network synchronization
- Simulation recording
- Debug visualization
- Performance profiling