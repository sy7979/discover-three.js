import { GLTFLoader } from 'loaders/GLTFLoader.js'
import { setupModel } from './setupModel.js'

async function loadBirds() {
  const loader = new GLTFLoader()
  const [flamingoData, parrotData, storkData] = await Promise.all([
    loader.loadAsync('./assets/models/Flamingo.glb'),
    loader.loadAsync('./assets/models/Parrot.glb'),
    loader.loadAsync('./assets/models/Stork.glb'),
  ])

  const flamingo = setupModel(flamingoData)
  flamingo.position.set(-2, 2, 0)
  const parrot = setupModel(parrotData)
  parrot.position.set(2, 2, -2)
  const stork = setupModel(storkData)
  stork.position.set(0, 0, -3)

  return {
    flamingo,
    parrot,
    stork
  }
}

export { loadBirds }