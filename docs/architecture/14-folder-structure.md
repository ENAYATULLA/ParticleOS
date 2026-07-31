# Folder Structure

## Overview

ParticleOS is organized as a pnpm monorepo.

Each package has a single responsibility and communicates with other packages only through public APIs.

This structure promotes modularity, maintainability, and scalability.

---

# Repository Structure

```
particleos/

├── apps/
│   ├── docs/
│   ├── playground/
│   └── examples/
│
├── packages/
│   ├── particle-core/
│   ├── math/
│   ├── renderer/
│   ├── shader-lab/
│   ├── hooks/
│   ├── ui/
│   ├── utils/
│   └── portfolio-kit/
│
├── config/
│   ├── biome/
│   └── typescript/
│
├── docs/
│   ├── architecture/
│   ├── guides/
│   ├── api/
│   └── examples/
│
├── scripts/
│
├── .github/
│
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

---

# Applications

## docs

Documentation website.

Possible technologies:

- VitePress
- Docusaurus

---

## playground

A development sandbox for testing new engine features.

Examples:

- Smoke
- Fire
- Snow
- Rain
- Galaxy

---

## examples

Production-ready example applications demonstrating engine usage.

---

# Packages

## particle-core

Contains:

- ParticleSystem
- Simulation
- Emitters
- Behaviors
- Forces
- Particle Pool
- Core interfaces

This package contains no renderer-specific code.

---

## math

Contains reusable mathematical primitives.

Examples:

- Vector2
- Vector3
- Vector4
- Matrix4
- Quaternion
- Color

---

## renderer

Contains renderer interfaces and implementations.

Examples:

- WebGL Renderer
- WebGPU Renderer
- Canvas Renderer

---

## shader-lab

Reusable shader utilities.

Examples:

- GLSL snippets
- WGSL snippets
- Shader builders

---

## hooks

Framework-specific integrations.

Examples:

- React Hooks
- Vue Composables
- Svelte Helpers

---

## ui

Developer-facing UI components.

Examples:

- FPS Counter
- Debug Panel
- Performance Overlay

---

## utils

Shared utility functions.

Examples:

- Random
- UUID
- EventEmitter
- Object Pool Helpers

---

## portfolio-kit

Reusable visual presets and showcase components.

Examples:

- Hero backgrounds
- Interactive particles
- Portfolio effects

---

# Documentation

The documentation should be divided into multiple sections.

```
docs/

├── architecture/
├── api/
├── guides/
├── tutorials/
├── examples/
└── changelog/
```

---

# Testing

Each package should include its own tests.

Example:

```
particle-core/

src/

tests/
```

Tests should remain close to the package they validate.

---

# Assets

Example assets may include:

- Textures
- HDR files
- Sample models
- Icons
- Demo resources

Assets should remain outside the engine packages.

---

# Design Rules

The repository should:

- Keep packages independent.
- Minimize cross-package dependencies.
- Prefer composition over inheritance.
- Expose only public APIs.
- Keep implementation details private.

---

# Future Growth

The repository structure should support:

- Additional renderers
- Additional framework integrations
- Community plugins
- Documentation website
- Benchmark suite
- Visual editor
- Asset pipeline

New packages should integrate without requiring major restructuring.