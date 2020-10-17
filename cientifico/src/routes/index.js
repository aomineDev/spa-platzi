import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'

import Header from '../templates/Header'

const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': () => 'Contact'
}

async function router () {
  const header = document.getElementById('header') || null
  const content = document.getElementById('content') || null

  header.innerHTML = Header()

  const hash = getHash()
  const route = resolveRoutes(hash)
  const render = routes[route] || Error404

  content.innerHTML = await render()
}

export default router
