# ADR 0001 — Project Foundation

## Status

Accepted

---

## Context

ParticleOS is intended to become a long-term open-source ecosystem for building GPU-accelerated interactive web experiences.

The project is not designed as a single portfolio website. Instead, the portfolio will be the first showcase application built on top of the framework.

The repository must remain maintainable, modular, scalable, and production-ready for many years.

---

## Decision

The project will be built using a monorepo architecture.

The repository will contain multiple independent packages that can be developed, tested, versioned, and published separately.

The first-party applications will consume those packages exactly as external users would.

---

## Consequences

Advantages

- Better modularity
- Better scalability
- Easier package publishing
- Easier testing
- Better documentation
- Better code ownership

Trade-offs

- Slightly more initial complexity
- More tooling configuration

These trade-offs are acceptable because ParticleOS is intended to be a long-term engineering project rather than a short-term application.