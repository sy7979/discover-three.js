import { PerspectiveCamera } from 'three'

function createCamera(sizes) {
  const fov = 75
  const aspect = sizes.width / sizes.height
  const near = 0.1
  const far = 100
  const camera = new PerspectiveCamera(fov, aspect, near, far)
  
  return camera
}

export { createCamera }
