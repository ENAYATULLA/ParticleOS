import { Particle } from "@particleos/particle-core";
import "./style.css";

import { GameLoop } from "./engine/GameLoop";
import { CanvasRenderer } from "./renderer/CanvasRenderer";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App element not found.");
}

const renderer = new CanvasRenderer(app);

const particles: Particle[] = [];

for (let i = 0; i < 100; i++) {
  const particle = new Particle();

  particle.position.x = Math.random() * renderer.width;
  particle.position.y = Math.random() * renderer.height;

  particle.velocity.x = (Math.random() - 0.5) * 120;
  particle.velocity.y = (Math.random() - 0.5) * 120;

  particle.radius = 2 + Math.random() * 3;
  particle.active = true;

  particles.push(particle);
}

function update(deltaTime: number): void {
  for (const particle of particles) {
    particle.position.x += particle.velocity.x * deltaTime;
    particle.position.y += particle.velocity.y * deltaTime;

    if (
      particle.position.x < 0 ||
      particle.position.x > renderer.width
    ) {
      particle.velocity.x *= -1;
    }

    if (
      particle.position.y < 0 ||
      particle.position.y > renderer.height
    ) {
      particle.velocity.y *= -1;
    }
  }
}

function render(): void {
  renderer.clear();

  for (const particle of particles) {
    renderer.drawCircle(
      particle.position.x,
      particle.position.y,
      particle.radius
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