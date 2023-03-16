import { World } from './World/World.js'

function main() {
  console.log('this is main')
  const container = document.querySelector('#scene-container')
  const world = new World(container)
  world.render()
}

main()