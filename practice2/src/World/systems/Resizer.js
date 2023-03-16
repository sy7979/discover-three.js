function resize(camera, renderer, container) {
  camera.aspect = container.clientWidth / container.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(container.clientWidth, container.clientHeight)
}

class Resizer {
  constructor(camera, renderer, container) {
    resize(camera, renderer, container)
    window.addEventListener('resize', ()=> {
      resize(camera, renderer, container)
      this.onResize()
    })
  }
  onResize() {
    console.log('Resized!')
  }
}

export { Resizer }