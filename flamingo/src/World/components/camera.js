import { PerspectiveCamera } from 'three'

function createCamera(container) {
  const fov = 75
  const aspect = container.clientWidth / container.clientHeight
  const near = 0.1
  const far = 100
  const camera = new PerspectiveCamera(fov, aspect, near, far)
  camera.position.z = 8;

  return camera
}

export { createCamera }