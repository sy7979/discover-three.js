import { OrbitControls } from 'controls/Orbitcontrols.js'

function createControls(camera, renderer) {
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.tick = () => controls.update()

  return controls
}

export { createControls }