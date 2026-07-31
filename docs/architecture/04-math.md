# Math Architecture

## Overview

The ParticleOS math library provides the fundamental mathematical primitives used throughout the engine.

The library is designed to be:

- Fast
- Lightweight
- Type-safe
- Renderer agnostic
- Dependency free

It should not depend on Three.js or any external math library.

---

# Goals

- Predictable API
- Minimal allocations
- Mutable objects for performance
- Easy to extend
- Suitable for both CPU and GPU workflows

---

# Core Types

## Vector2

Represents a two-dimensional vector.

Primary use cases:

- UV coordinates
- Screen space
- 2D simulations

---

## Vector3

Represents a three-dimensional vector.

Primary use cases:

- Position
- Velocity
- Acceleration
- Direction
- Force

---

## Vector4

Represents a four-dimensional vector.

Primary use cases:

- Homogeneous coordinates
- Shader data
- GPU buffer layouts

---

## Color

Represents an RGBA color.

Primary use cases:

- Particle color
- Gradients
- Color interpolation

---

## Matrix4

Represents a 4×4 transformation matrix.

Primary use cases:

- Transformations
- Camera calculations
- GPU uploads

---

## Quaternion

Represents 3D rotation.

Primary use cases:

- Rotation
- Orientation
- Smooth interpolation

---

# Utility Classes

The math package should also provide:

- Random
- Easing
- Interpolation
- Constants
- Math Utilities

---

# Design Rules

Every math object should:

- Be mutable
- Support method chaining
- Avoid unnecessary allocations
- Expose clear APIs
- Have predictable behavior

Example:

```ts
position
    .add(velocity)
    .multiplyScalar(deltaTime)
    .normalize();
```

---

# Public API

Example:

```ts
const position = new Vector3();

const velocity = new Vector3(1, 0, 0);

position.add(velocity);

position.normalize();
```

---

# Future Optimizations

The math package should eventually support:

- SIMD optimizations
- TypedArray-backed vectors
- GPU-friendly memory layouts
- Parallel processing

---

# Non Goals

The math package should not:

- Handle rendering
- Depend on WebGL
- Depend on Three.js
- Include physics logic

It exists purely to provide mathematical primitives for the engine.