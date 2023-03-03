import { DirectionalLight } from "three";

function createLights() {
  const color = 'white'
  const intensity = 8
  const light = new DirectionalLight(color, intensity)
  
  light.position.set(10, 10, 10)

  return light
}

export { createLights }