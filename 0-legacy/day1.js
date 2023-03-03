import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';

// just waiting for your beautiful creations!

const container = document.querySelector('#scene-container')

// 1. Scene
const scene = new Scene();
scene.background = new Color('skyblue');

// 2. Camera
const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 100;
const camera = new PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 10);


// 3-1. Geometry
const length = 2;
const width = 2;
const depth = 2;
const geometry = new BoxBufferGeometry(length, width, depth);

// 3-2. Material
const material = new MeshBasicMaterial();

// 3-3. Mesh
const cube = new Mesh(geometry, material)
scene.add(cube);

// 4. Renderer
const renderer = new WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight)
renderer.setPixelRatio(window.devicePixelRatio);

container.append(renderer.domElement);

renderer.render(scene, camera);