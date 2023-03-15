import { createCamera } from "../../src/World/components/camera.js"
import { createLights } from "../../src/World/components/lights.js"
import { createScene } from "../../src/World/components/scene.js"
import { createCube } from "../../src/World/components/cube.js"
import { createAxesHelper, createGridHelper } from './components/helper.js'

import { loadBirds } from "../../src/World/components/Birds/birds.js"

import { createControls } from "../../src/World/systems/controls.js"
import { Loop } from "../../src/World/systems/Loop.js"
import { createRenderer } from "../../src/World/systems/renderer.js"
import { Resizer } from "../../src/World/systems/Resizer.js"

let camera, scene, cube, renderer, container, controls, loop
class World {
  constructor() {
    container = document.querySelector('#scene-container')
    const sizes = {
      width: container.clientWidth,
      height: container.clientHeight,
    }

    camera = createCamera(sizes)
    camera.position.z = 8

    cube = createCube()

    const { mainLight, ambientLight } = new createLights()

    const bird = loadBirds()

    scene = createScene()
    // scene.add(cube)
    scene.add(mainLight, ambientLight)

    renderer = createRenderer()

    controls = createControls(camera, renderer)

    loop = new Loop(renderer, camera, scene)
    loop.start()
    loop.updatables.push(controls)

    const resizer = new Resizer(camera, renderer, container)

    loadBirds()

    scene.add(createAxesHelper(), createGridHelper())
    
  }

  render() {
    container.appendChild(renderer.domElement)
    loop.start()
  }


  async init() {
    const { parrot, flamingo, stork } = await loadBirds()
    loop.updatables.push(parrot, flamingo, stork)
    scene.add(parrot, flamingo, stork)
  }
}

export { World }