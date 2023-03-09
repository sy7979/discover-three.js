import { AnimationMixer } from "three"
// mesh 가져오기, 애니메이션 할당, tick 함수 만들기
function setupModel(data) {
  const model = data.scene.children[0]
  const clip = data.animations[0]

  const mixer = new AnimationMixer(model)
  const action = mixer.clipAction(clip)
  action.play()
  
  model.tick = (delta) => mixer.update(delta)

  return model
}

export { setupModel }