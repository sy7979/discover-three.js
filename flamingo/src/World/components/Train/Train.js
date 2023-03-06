import { Group, Mesh } from "three";

class Train extends Group {
  constructor() {
    super()
    const mesh = new Mesh()
    this.add(mesh)
  }
}

export { Train }