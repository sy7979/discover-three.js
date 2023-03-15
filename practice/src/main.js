import { World } from './World/World.js'

async function main() {
  const world = new World()
  world.render()
  await world.init()
}

main()
