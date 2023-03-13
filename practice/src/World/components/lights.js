import { DirectionalLight, HemisphereLight } from "three";

function createLights() {
  const lights = [
    new DirectionalLight(),
    new HemisphereLight()
  ]

  return lights
}

export { createLights }