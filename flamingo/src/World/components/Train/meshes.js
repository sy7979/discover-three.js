import { Mesh } from "three";
import { createGeometries } from './geometries.js'
import { createMaterials } from "./materials.js";

function createMeshes() {
  const geometries = createGeometries()
  const materials = createMaterials()
}

export { createMeshes }