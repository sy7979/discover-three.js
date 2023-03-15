import { BoxGeometry, MeshBasicMaterial, Mesh } from "three";

function createCube() {
  const geometry = new BoxGeometry(1, 1, 1)
  const material = new MeshBasicMaterial({ color: 'cornflowerblue'})
  const cube = new Mesh(geometry, material)

  return cube
}

export { createCube }