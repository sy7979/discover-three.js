function setSize(camera, renderer, container) {
  camera.aspect = container.clientWidth / container.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(container.clientWidth, container.clientHeight)
}

class Resizer {
  constructor(camera, renderer, container) {
    setSize(camera, renderer, container)

    window.onresize = () => {
      setSize(camera, renderer, container)
    }
  }
}

export { Resizer }