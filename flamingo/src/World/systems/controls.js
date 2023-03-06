import { OrbitControls } from "../../../vendor/three/examples/jsm/controls/OrbitControls.js";

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas)
  // control 이 끝날 때 자연스럽게 움직이도록 함 (rendering update필요)
  controls.enableDamping = true
  controls.tick = () => controls.update()

  // // target이나 camera가 animating할 때 컨트롤 기능 막음
  // controls.enabled = false;
  // // animate 하기 전 상태 저장
  // controls.saveState();
  // // saveState에서부터 다시 시작
  // controls.reset();
  // // controls 기능 막아놓음
  // controls.dispose();

  // controls.enabled = false;

  // controls.autoRotate = true;
  // controls.autoRotateSpeed = 1;


  // controls.minDistance = 5;
  // controls.maxDistance = 20;

  // controls.minAzimuthAngle = -Infinity
  // controls.maxAzimuthAngle = Infinity

  // controls.minPolarAngle = 0;
  // controls.maxPolarAngle = Math.PI;



  return controls
}

export { createControls }