# Behavior Architecture

## Overview

Behaviors define how particles change over time.

A behavior receives a particle and modifies its properties during the simulation update.

Behaviors are independent, reusable, and composable.

---

# Responsibilities

Behaviors are responsible for modifying particle properties.

Examples include:

- Position
- Velocity
- Rotation
- Color
- Size
- Opacity

---

# Not Responsible For

Behaviors should never:

- Spawn particles
- Destroy particles
- Render particles
- Manage particle pools
- Allocate large amounts of memory

These responsibilities belong to other engine components.

---

# Behavior Pipeline

Every simulation frame executes behaviors after forces have been applied.

```
Spawn

↓

Forces

↓

Velocity

↓

Position

↓

Behaviors

↓

Lifetime

↓

Renderer
```

---

# Behavior Interface

Every behavior implements the same interface.

```ts
interface Behavior {

    update(
        particle: Particle,
        deltaTime: number
    ): void;

}
```

This allows behaviors to be interchangeable.

---

# Execution Order

Behaviors execute in the order they are registered.

Example:

```
Gravity

↓

Drag

↓

Noise

↓

Color Over Lifetime

↓

Size Over Lifetime
```

Execution order should remain deterministic.

---

# Built-in Behaviors

ParticleOS should include common behaviors.

## Gravity

Applies constant acceleration.

---

## Drag

Gradually slows particles.

---

## Wind

Applies directional force.

---

## Noise

Adds random motion.

Useful for:

- Smoke
- Fire
- Clouds

---

## Orbit

Rotates particles around a target.

---

## Vortex

Creates swirling motion.

---

## Bounce

Reflects particles from surfaces.

---

## Limit Velocity

Caps particle speed.

---

## Color Over Lifetime

Interpolates particle color based on normalized lifetime.

Example:

```
Red

↓

Orange

↓

Yellow

↓

Transparent
```

---

## Size Over Lifetime

Interpolates particle size.

Example:

```
Large

↓

Medium

↓

Small
```

---

## Rotation Over Lifetime

Continuously rotates particles.

---

## Opacity Over Lifetime

Gradually fades particles.

---

# Behavior Composition

Multiple behaviors may be applied simultaneously.

Example:

```
Gravity

+

Noise

+

Color Over Lifetime

+

Size Over Lifetime
```

Behaviors should remain independent.

---

# Custom Behaviors

Users should be able to create custom behaviors.

Example:

```ts
class SpiralBehavior implements Behavior {

    update(particle, deltaTime) {

        // custom logic

    }

}
```

The engine should not require modification.

---

# Performance Guidelines

Behaviors should:

- Avoid memory allocations
- Reuse temporary objects
- Execute quickly
- Be deterministic
- Avoid unnecessary branching

---

# Design Rules

- Behaviors should be stateless whenever possible.
- Behaviors should modify only particle data.
- Behaviors should never depend on renderer implementations.
- Behaviors should be reusable across particle systems.

---

# Public API

Example:

```ts
system.addBehavior(new GravityBehavior());

system.addBehavior(new DragBehavior());

system.addBehavior(new NoiseBehavior());
```

Behaviors may also be removed dynamically.

```ts
system.removeBehavior(gravityBehavior);
```

---

# Future Extensions

The behavior system should support:

- GPU behaviors
- Compute shader behaviors
- Node-based behaviors
- Visual behavior editor
- Scriptable behaviors
- User-defined behavior libraries

The public API should remain stable as new behavior types are introduced.