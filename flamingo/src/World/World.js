import { loadBirds } from "./components/birds/birds.js";
import { createCamera } from "./components/camera.js";
import { createLights } from "./components/light.js";
import { createScene } from "./components/scene.js";
import { createAxesHelper, createGridHelper } from './components/helpers.js'

import { Train } from "./components/Train/Train.js";

import { createControls } from "./systems/controls.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";

let camera, renderer, scene, loop, controls
class World {
  constructor(container) {
    camera = createCamera(container);
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement)
    controls = createControls(camera, renderer.domElement)

    const { ambientLight, mainLight} = createLights();
    const train = new Train();

    loop.updatables.push(controls)

    scene.add(ambientLight, mainLight)

    const resizer = new Resizer(container, camera, renderer)

    scene.add(createAxesHelper(), createGridHelper())

  }

  start() {
    loop.start()
  }

  end() {
    loop.end()
  }

  render() {
    renderer.render(camera, scene)
  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds()
    
    controls.target.copy(parrot.position)
    
    loop.updatables.push(parrot, flamingo, stork)
    scene.add(parrot, flamingo, stork)
  }
}

export { World }