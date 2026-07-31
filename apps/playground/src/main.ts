import "./style.css";

import { CanvasRenderer } from "./renderer/CanvasRenderer";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App element not found.");
}

const renderer = new CanvasRenderer(app);

const particles: Particle[] = [];

for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * renderer.width,
    y: Math.random() * renderer.height,
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    radius: 2 + Math.random() * 3,
  });
}

function update(): void {
  for (const particle of particles) {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < 0 || particle.x > renderer.width) {
      particle.vx *= -1;
    }

    if (particle.y < 0 || particle.y > renderer.height) {
      particle.vy *= -1;
    }
  }
}

function render(): void {
  renderer.clear();

  for (const particle of particles) {
    renderer.drawCircle(
      particle.x,
      particle.y,
      particle.radius
    );
  }

  renderer.drawText(
    `Particles: ${particles.length}`,
    20,
    30
  );
}

function loop(): void {
  update();
  render();

  requestAnimationFrame(loop);
}

loop();