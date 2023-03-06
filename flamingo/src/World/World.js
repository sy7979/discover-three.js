import { Color } from "three"

import { createCamera } from "./components/camera.js"
import { createCube } from "./components/cube.js"
import { createScene } from "./components/scene.js"
import { createLights } from "./components/light.js"

import { createControls } from './systems/controls.js'
import { createRenderer } from "./systems/renderer.js"
import { Resizer } from "./systems/Resizer.js"
import { Loop } from "./systems/Loop.js"

let camera, 
    scene,
    renderer,
    loop

class World {
  constructor(container) {
    camera = createCamera(container);
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer)
    container.append(renderer.domElement)

    const cube1 = createCube();
    cube1.position.set(1, 0, 0)
    cube1.scale.set(0.5, 0.5, 0.5)
    const cube2 = createCube();
    cube2.position.set(-1, 0, 0)

    const minicube1 = createCube();
    minicube1.scale.set(0.5, 0.5, 0.5)
    minicube1.position.set(1, 0, 0)
    minicube1.material.color = new Color('red')
    cube1.add(minicube1)

    const controls = createControls(camera, renderer.domElement)
    // controls.target.set(1, 2, 3)
    // controls.target.copy(cube1.position);

    // controls.addEventListener('change', () => {
    //   this.render()
    // })
    
    const light = createLights()

    // loop.updatables.push(cube1)
    loop.updatables.push(controls)

    scene.add(cube1, cube2, light)

    const resizer = new Resizer(container, camera, renderer, this.render)

    // 외부 모듈에 있는 클래스를 여기서 이렇게 제어할 수 있네..!? 댑악 댑악
    // resizer.onResize = () => {
    //   this.render();
    // }
  }
  
  render() {
    renderer.render(scene, camera)
  }

  start() {
    loop.start()
  }

  stop() {
    loop.stop()
  }
}

export { World }