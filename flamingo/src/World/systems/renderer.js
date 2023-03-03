import { WebGLRenderer } from "three";

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true })

  // renderer.setAnimationLoop(() => {
  //   renderer.render(scene, camera)
  // })
  renderer.physicallyCorrectLights = true;
  
  return renderer
}

export {createRenderer}