import { Clock } from "three";

const clock = new Clock()

class Loop {
  constructor(renderer, camera, scene) {
    this.renderer = renderer
    this.camera = camera
    this.scene = scene
    this.updatables = []
    

  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.renderer.render(this.scene, this.camera)
      this.tick()
    })
  }
  stop() {
    this.renderer.setAnimationLoop(null)
  }
  tick() {
    const delta = clock.getDelta()
    for (let item of this.updatables) {
      item.tick(delta)
    }
  }

}

export { Loop }