// import { World } from './World/World.js'

// function main() {
//   const container = document.querySelector('#scene-container')
//   const world = new World(container);
//   world.render();

  
// }

// main()


import {
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  PerspectiveCamera,
  WebGLRenderer,
  Color,
  Mesh,
} from 'three';

import {
  OrbitControls
} from '../vendor/three/examples/jsm/controls/OrbitControls.js';


const container = document.querySelector('#scene-container')
const scene = new Scene()
scene.background = new Color('skyblue')

const fov = 75
const aspect = container.clientWidth / container.clientHeight
const near = 0.1
const far = 100

const camera = new PerspectiveCamera(fov, aspect, near, far)
camera.position.z = 2;

const geometry = new BoxGeometry()
const material = new MeshBasicMaterial()
const cube = new Mesh(geometry, material)

scene.add(cube)

new OrbitControls(camera, container)

const renderer = new WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight)
renderer.setPixelRatio(window.devicePixelRatio)

container.append(renderer.domElement)

renderer.render(scene, camera)





