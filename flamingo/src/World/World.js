import { createCamera } from "./components/camera.js";
import { createLights } from "./components/light.js";
import { createScene } from "./components/scene.js";
import { createAxesHelper, createGridHelper } from './components/helpers.js'

import { Train } from "./components/Train/Train.js";

import { createControls } from "./systems/controls.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";

let camera, renderer, scene, loop
class World {
  constructor(container) {
    camera = createCamera(container);
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement)

    const controls = createControls(camera, renderer.domElement)
    const { ambientLight, mainLight} = createLights();
    const train = new Train();

    loop.updatables.push(controls, train)

    scene.add(ambientLight, mainLight, train)

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
}

export { World }