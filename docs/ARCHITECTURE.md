# ParticleOS Architecture

```text
Applications

↓

Scene Engine

↓

Morph Engine

↓

Particle Core

↓

Shader Lab

↓

WebGL
```

Each layer depends only on the layer directly below it.

Higher-level packages never introduce circular dependencies.