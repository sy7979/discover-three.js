import { OrbitControls } from 'controls/OrbitControls.js'

function createControls(camera, element) {
  const control = new OrbitControls(camera, element)
  control.enableDamping = true

  control.tick = () => {control.update()}

  return control
}

export { createControls }