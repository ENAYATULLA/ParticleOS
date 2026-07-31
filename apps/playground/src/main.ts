import {
  AlphaOverLifetimeBehavior,
  ContinuousEmitter,
  GravityForce,
  ParticleSystem,
} from "@particleos/particle-core";

import "./style.css";

import { GameLoop } from "./engine/GameLoop";
import { CanvasRenderer } from "./renderer/CanvasRenderer";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App element not found.");
}

const renderer = new CanvasRenderer(app);

const system = new ParticleSystem({
  maxParticles: 1000,
  autoStart: true,
});

system.setWorldBounds(
  renderer.width,
  renderer.height
);

// Gravity
system.addForce(
  new GravityForce(300)
);

// Alpha Fade Behavior
system.addBehavior(
  new AlphaOverLifetimeBehavior()
);

// Continuous emitter
system.addEmitter(
  new ContinuousEmitter(
    renderer.width / 2,
    renderer.height / 2,
    30,
    120
  )
);

function update(deltaTime: number): void {
  system.update(deltaTime);
}

function render(): void {
  renderer.clear();

  const particles = system.getActiveParticles();

  for (const particle of particles) {
    renderer.drawCircle(
      particle.position.x,
      particle.position.y,
      particle.radius,
      particle.color,
      particle.alpha
    );
  }

  renderer.drawText(
    `Particles: ${particles.length}`,
    20,
    30
  );
}

const gameLoop = new GameLoop(update, render);

gameLoop.start();