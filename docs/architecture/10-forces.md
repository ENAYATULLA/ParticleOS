# Force Architecture

## Overview

Forces are responsible for changing the motion of particles.

Unlike behaviors, forces affect a particle's physical movement by influencing its acceleration and velocity.

Forces are reusable, composable, and independent of rendering.

---

# Responsibilities

Forces are responsible for:

- Applying acceleration
- Changing velocity
- Influencing movement
- Simulating environmental effects

Examples include:

- Gravity
- Wind
- Attraction
- Repulsion
- Turbulence

---

# Not Responsible For

Forces should never:

- Spawn particles
- Render particles
- Change particle color
- Change particle size
- Manage particle lifetime

Those responsibilities belong to behaviors and the simulation.

---

# Simulation Order

Forces execute before behaviors.

```
Spawn

↓

Apply Forces

↓

Integrate Velocity

↓

Integrate Position

↓

Execute Behaviors

↓

Lifetime

↓

Renderer
```

---

# Force Interface

Every force implements the same interface.

```ts
interface Force {

    apply(
        particle: Particle,
        deltaTime: number
    ): void;

}
```

This allows all force implementations to be interchangeable.

---

# Built-in Forces

ParticleOS should provide several common forces.

## Gravity

Applies constant downward acceleration.

Example:

```
↓

↓

↓

Gravity
```

---

## Wind

Applies directional movement.

Example:

```
→ → → →
```

Wind strength and direction may change over time.

---

## Drag

Reduces particle velocity.

Useful for:

- Smoke
- Dust
- Water

---

## Attraction

Pulls particles toward a target.

```
•

↙ ↓ ↘
```

---

## Repulsion

Pushes particles away from a source.

```
↖ ↑ ↗

•
```

---

## Radial Force

Applies force outward in all directions.

Useful for:

- Explosions
- Shockwaves

---

## Turbulence

Produces chaotic movement using procedural noise.

Useful for:

- Fire
- Smoke
- Clouds
- Magic effects

---

## Vortex

Creates rotational movement around a center point.

Useful for:

- Tornadoes
- Black holes
- Energy effects

---

# Global Forces

Global forces affect every active particle.

Example:

```ts
system.addForce(new GravityForce());
```

---

# Local Forces

Local forces affect only particles inside a specific region.

Examples:

- Sphere
- Box
- Cylinder

```
+---------+

 Local Force

+---------+
```

---

# Force Composition

Multiple forces may be active simultaneously.

Example:

```
Gravity

+

Wind

+

Drag

+

Turbulence
```

Each force is applied independently.

---

# Custom Forces

Users should be able to implement custom forces.

Example:

```ts
class SpiralForce implements Force {

    apply(particle, deltaTime) {

        // custom logic

    }

}
```

The engine should not require modification.

---

# Performance Guidelines

Forces should:

- Avoid memory allocations
- Reuse temporary objects
- Execute quickly
- Be deterministic
- Scale to thousands of particles

---

# Design Rules

- Forces should modify only movement-related properties.
- Forces should not depend on renderer implementations.
- Forces should be reusable.
- Forces should be composable.

---

# Public API

Example:

```ts
system.addForce(new GravityForce());

system.addForce(new WindForce());

system.removeForce(gravityForce);
```

---

# Future Extensions

The force system should support:

- GPU forces
- Compute shader forces
- Spatial force fields
- Noise-based force fields
- Scriptable forces
- User-defined force libraries

The public API should remain stable as new force types are introduced.