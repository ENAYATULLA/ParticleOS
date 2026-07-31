# Emitter Architecture

## Overview

Emitters are responsible for creating particles.

They define when particles are created, where they appear, and how they are initialized.

Emitters do not update particles after they are spawned.

---

# Responsibilities

An emitter is responsible for:

- Spawning particles
- Initializing particle state
- Choosing spawn position
- Choosing spawn direction
- Setting initial velocity
- Setting initial lifetime
- Setting initial color
- Setting initial size

---

# Not Responsible For

Emitters should never:

- Update particles
- Apply forces
- Render particles
- Remove particles
- Manage simulation timing

Those responsibilities belong to other engine components.

---

# Lifecycle

```
Create Emitter

↓

Configure

↓

Register To ParticleSystem

↓

Emit Particles

↓

Pause / Resume

↓

Destroy
```

---

# Emission Modes

## Continuous

Continuously emits particles.

Example:

100 particles / second

---

## Burst

Creates a fixed number of particles instantly.

Example:

Explosion

Firework

Magic Effect

---

## Manual

User explicitly requests emission.

Example:

emitter.emit(50);
```

---

# Spawn Shapes

ParticleOS should support multiple spawn shapes.

## Point

```
•
```

---

## Box

```
+--------+
|        |
|        |
+--------+
```

---

## Sphere

```
○
```

---

## Cone

```
 /\
/  \
```

---

## Circle

```
◯
```

---

## Mesh

Spawn particles from the surface or volume of a mesh.

---

# Spawn Properties

Every emitted particle should receive:

- Position
- Velocity
- Acceleration
- Lifetime
- Size
- Rotation
- Color

These values may be fixed or randomized.

---

# Randomization

Every property may support ranges.

Example:

Velocity

```ts
minVelocity

maxVelocity
```

Lifetime

```ts
minLifetime

maxLifetime
```

Size

```ts
minSize

maxSize
```

Color

```ts
startColor

endColor
```

---

# Public API

Example:

```ts
const emitter = new ParticleEmitter();

emitter.rate = 100;

emitter.shape = new SphereEmitter();

emitter.start();
```

---

# Future API

```ts
emitter.play();

emitter.pause();

emitter.stop();

emitter.restart();

emitter.emit(50);
```

---

# Design Rules

- Emitters should be reusable.
- Emitters should not allocate unnecessary memory.
- Emitters should support custom spawn shapes.
- Emitters should expose a simple public API.
- Internal implementation should remain hidden.

---

# Future Extensions

ParticleOS should support:

- GPU emitters
- Mesh emitters
- Texture emitters
- Spline emitters
- Audio reactive emitters
- Custom user-defined emitters

The architecture should allow these features without changing the public API.