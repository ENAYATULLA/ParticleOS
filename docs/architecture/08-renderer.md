# Renderer Architecture

## Overview

The renderer is responsible for drawing particles to the screen.

The renderer does not simulate particles. It only consumes particle data produced by the simulation.

ParticleOS is renderer agnostic.

The core engine should never depend on Three.js, Babylon.js, WebGL, or WebGPU directly.

---

# Responsibilities

The renderer is responsible for:

- Drawing particles
- Uploading particle data to the GPU
- Managing render buffers
- Managing shaders
- Instanced rendering
- Render optimization

---

# Not Responsible For

The renderer should never:

- Spawn particles
- Update particle physics
- Apply forces
- Execute behaviors
- Manage particle lifetime

Those responsibilities belong to the simulation.

---

# Architecture

```
ParticleSystem

↓

Simulation

↓

Renderer Interface

↓

Renderer Implementation

↓

Graphics API

↓

GPU
```

---

# Renderer Interface

The core communicates only through a renderer interface.

Example:

```ts
interface Renderer {

    initialize(): void;

    render(): void;

    resize(width: number, height: number): void;

    dispose(): void;

}
```

The ParticleSystem should never know which renderer implementation is being used.

---

# Supported Renderers

Future renderer implementations may include:

- WebGL Renderer
- WebGPU Renderer
- Three.js Renderer
- React Three Fiber Renderer
- Babylon.js Renderer
- Canvas 2D Renderer (Debug)

All implementations should follow the same interface.

---

# Rendering Pipeline

Each frame follows this order.

```
Simulation

↓

Collect Active Particles

↓

Prepare GPU Buffers

↓

Upload Data

↓

Draw Particles

↓

Present Frame
```

---

# Particle Data

The renderer receives only the information required for drawing.

Example:

```ts
position

rotation

size

color

opacity
```

The renderer should not receive simulation-specific information.

---

# Buffer Management

Renderers should minimize GPU uploads.

Strategies may include:

- Persistent buffers
- Dynamic buffers
- Partial updates
- Double buffering

The implementation details are renderer-specific.

---

# Instanced Rendering

ParticleOS should use instanced rendering whenever possible.

Example:

```
One Mesh

↓

Thousands Of Instances

↓

One Draw Call
```

This significantly improves rendering performance.

---

# Shader Management

The renderer owns shader compilation.

Responsibilities include:

- Loading shaders
- Compiling shaders
- Linking programs
- Managing uniforms
- Managing attributes

The core engine should not know how shaders work internally.

---

# Resize Handling

Renderers should respond to viewport changes.

Example:

```ts
renderer.resize(width, height);
```

---

# Resource Management

Every renderer should clean up resources when no longer needed.

Example:

```ts
renderer.dispose();
```

Resources include:

- Buffers
- Textures
- Shader programs
- GPU memory

---

# Performance Goals

The renderer should aim for:

- Minimal draw calls
- Minimal buffer uploads
- Efficient memory usage
- High particle counts
- Stable frame times

---

# Design Rules

- Renderer implementations are replaceable.
- The public API should remain stable.
- The core engine depends only on interfaces.
- Rendering logic should never leak into the simulation.

---

# Future Extensions

The renderer architecture should support:

- Compute shaders
- GPU-driven rendering
- Indirect draw calls
- Render graph integration
- Multi-pass rendering
- XR (VR/AR) rendering
- Custom render pipelines