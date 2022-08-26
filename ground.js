import {
  getCustomProperty,
  incrementCustomProperty,
  setCustomProperty,
} from "./updateCustomProperty.js";

const SPEED = 0.05;
const groundElement = document.querySelectorAll("[data-ground]");

export function setupGround() {
  setCustomProperty(groundElement[0], "--left", 0);
  console.log(getCustomProperty(groundElement[0], "--left"));
  setCustomProperty(groundElement[1], "--left", 300);
  console.log(getCustomProperty(groundElement[1], "--left"));
}

export function updateGround(delta, speedScale) {
  groundElement.forEach((ground) => {
    incrementCustomProperty(ground, "--left", delta * speedScale * SPEED * -1);

    if (getCustomProperty(ground, "--left") <= -300) {
      incrementCustomProperty(ground, "--left", 600);
    }
  });
}
