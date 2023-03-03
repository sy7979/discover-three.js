import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterail,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three';


const container = document.getElementById('#scene-container');

// 1. Scene
const scene = new Scene();
scene.backgrund = new Color('red');

// 2. Camera
const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 100;
const camera = new PerspectiveCamera(fov, aspect, near, far, camera);

// 3. Geometry
const geometry = new BoxBufferGeometry();
const material = new MeshbasicMaterial()
const cube = new Mesh(geometry, material)
scene.add(cube);

// 4. Renderer
// const renderer = new WebGLRenderer();
// renderer.setSize(container.clientWidth, container.clientHeight);
// renderer.setPixelRatio(window.devicePixelRatio);

// container.append(renderer.domElement);
// renderer.render(scene, camera);


const renderer = new WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

container.appendChild(renderer.domElement);
renderer.add(scene, camera)

// 내부 폴더 구조
// Component - Scene, Camera, Cube
// System - Resizer, Renderer
// World.js


// main.js ==> 외부