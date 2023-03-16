import { PerspectiveCamera } from 'three'

function createCamera(container) {
  const camera = new PerspectiveCamera(
    75, 
    container.clientWidth / container.clientHeight,
    0.1,
    100
  )
  camera.position.z = 10
  
  return camera
}

export { createCamera }