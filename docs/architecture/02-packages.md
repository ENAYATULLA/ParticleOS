# Package Architecture

The project is organized as a monorepo.

## Core Packages

```
@particleos/core
```

The engine.

Responsible for:

- Particle System
- Simulation
- Emitters
- Forces
- Behaviors

---

```
@particleos/math
```

Custom math library.

Responsible for:

- Vector2
- Vector3
- Vector4
- Color
- Matrix4
- Quaternion

---

```
@particleos/renderer
```

Renderer abstraction.

Responsible for:

- WebGL Renderer
- WebGPU Renderer
- Instanced Rendering

---

```
@particleos/shader-lab
```

Reusable shader library.

---

```
@particleos/r3f
```

React Three Fiber integration.

---

```
@particleos/utils
```

Shared utilities.