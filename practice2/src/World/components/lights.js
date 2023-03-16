import { DirectionalLight, HemisphereLight } from "three";

function createLights() {
  const mainLight = new DirectionalLight('white', 8)
  mainLight.position.set(5, 5, 5)
  
  const ambientLight = new HemisphereLight('white', 'darkslategray', 3)

  return { mainLight, ambientLight}
}

export { createLights }