import { BoxGeometry, MeshStandardMaterial, Mesh } from "three";

function createCube() {
  const geometry = new BoxGeometry()
  const material = new MeshStandardMaterial({ color: 'royalblue' })

  const cube = new Mesh(geometry, material)

  return cube
}

export { createCube }