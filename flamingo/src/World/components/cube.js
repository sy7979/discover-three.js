import { 
  BoxGeometry,
  MathUtils,
  MeshStandardMaterial,
  Mesh,
  TextureLoader,
} from "three";

function createCube() {
  const geometry = new BoxGeometry()
  const material = createMaterial()
  const cube = new Mesh(geometry, material)
  // cube.rotation.set(0)
  
  const radiansPerSecond = MathUtils.degToRad(30)
  
  cube.tick = (delta) => {
    cube.rotation.z += radiansPerSecond * delta
    cube.rotation.x += radiansPerSecond * delta
    cube.rotation.y += radiansPerSecond * delta
  }

  return cube
}

function createMaterial() {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load(
    'assets/textures/uv-test-bw.png'
  )
  const material = new MeshStandardMaterial({ 
    map: texture,
  })

  return material
}

export { createCube }