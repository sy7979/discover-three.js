// import { 
//   BoxGeometry,
//   MathUtils,
//   MeshStandardMaterial,
//   Mesh,
//   TextureLoader,
// } from "three";

// function createCube() {
//   const geometry = new BoxGeometry()
//   const material = createMaterial()
//   const cube = new Mesh(geometry, material)
//   // cube.rotation.set(0)
  
//   const radiansPerSecond = MathUtils.degToRad(30)
  
//   cube.tick = (delta) => {
//     cube.rotation.z += radiansPerSecond * delta
//     cube.rotation.x += radiansPerSecond * delta
//     cube.rotation.y += radiansPerSecond * delta
//   }

//   return cube
// }

// function createMaterial() {
//   const textureLoader = new TextureLoader();
//   const texture = textureLoader.load(
//     'assets/textures/uv-test-bw.png'
//   )
//   const material = new MeshStandardMaterial({ 
//     map: texture,
//   })

//   return material
// }

// export { createCube }


import {
  SphereGeometry,
  Group,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
} from 'three'

function createMeshGroup() {
  const geometry = new SphereGeometry(0.25, 16, 16)
  const material = new MeshStandardMaterial({
    color: 'indigo'
  })
  const protoSphere = new Mesh(geometry, material)
  // const clonedSphere = protoSphere.clone()
  const group = new Group();

  for (let i = 0; i < 1; i += 0.08) {
    const sphere = protoSphere.clone()
    sphere.position.x = Math.cos( 2 * Math.PI * i)
    sphere.position.y = Math.sin( 2 * Math.PI * i)
    // sphere.position.z = -i * 5

    sphere.scale.multiplyScalar(0.01 + i)
    group.add(sphere)
  }

  group.scale.multiplyScalar(2)
  const radiansPerSecond = MathUtils.degToRad(30)
  
  group.tick = (delta) => {
    group.rotation.z -= delta * radiansPerSecond
  }
  return group
}

export {createMeshGroup}