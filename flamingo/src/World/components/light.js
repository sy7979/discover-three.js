import { 
  AmbientLight,
  HemisphereLight,
  DirectionalLight 
} from "three";

function createLights() {
  // const ambientLight = new AmbientLight('white', 2)
  const ambientLight = new HemisphereLight('white', 'darkslategray', 5)
  
  const mainLight = new DirectionalLight('white', 5)
  mainLight.position.set(10, 10, 10)

  return { ambientLight, mainLight}


  const color = 'white'
  const intensity = 8
  const light = new DirectionalLight(color, intensity)
  
  light.position.set(10, 10, 10)

  return light
}

export { createLights }