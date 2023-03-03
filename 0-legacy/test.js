// When we render the scene;
let renderer;
renderer.render(scene, camera)


let scene;
scene.children;

// When we add an object directly to the scene and then translate, rotate, or scale it, the object will move relative to world space that is relative to the cente rof the scene.

// these two statements are equivalant, so long as the object if a direct child of the scene;

// const mesh = new Mesh(geometry, material)

// When the renderer comes to render the mesh, it will see taht it has been scaled, and then draws the mesh at a different size