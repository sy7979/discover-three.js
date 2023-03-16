import { createCamera } from "./components/camera.js"
import { createCube } from './components/cube.js'
import { createAxesHelper, createGridHelper } from "./components/helpers.js"
import { createLights } from "./components/lights.js"
import { createScene } from "./components/scene.js"

import { loadBirds } from './components/birds/loadBirds.js'

import { createControls } from './systems/controls.js'
import { createRenderer } from './systems/renderer.js'
import { Loop } from './systems/Loop.js'
import { Resizer } from './systems/Resizer.js'

let loop, scene
class World {
  constructor(container) {
    const camera = createCamera(container)
    // const cube = createCube()
    const axesHelper = createAxesHelper()
    const gridHelper = createGridHelper()
    const { mainLight, ambientLight } = createLights()
    scene = createScene()

    scene.add(axesHelper, gridHelper, mainLight, ambientLight)

    const renderer = createRenderer()
    const control = createControls(camera, renderer.domElement)

    loop = new Loop(camera, scene, renderer)
    const resizer = new Resizer(camera, renderer, container)

    loop.updatables.push(control)

    container.appendChild(renderer.domElement)

    this.init()
  }

  render() {
    loop.start()
  }

  async init() {
    const {flamingo, parrot, stork} = await loadBirds()
    scene.add(flamingo, parrot, stork)
    loop.updatables.push(flamingo, parrot, stork)

  }
}

export { World }