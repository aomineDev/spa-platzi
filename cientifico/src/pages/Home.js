import getData from '../utils/getData'

async function Home () {
  const { results } = await getData()

  let Characters = ''

  results.forEach(character => {
    Characters += Character(character)
  })

  const view = /* html */ `
    <div class="Characters">
      ${Characters}
    </div>
  `

  return view
}

function Character ({ id, name, image }) {
  const view = /* html */ `
    <article class="Character-item">
      <a href="/#/${id}">
        <img src="${image}" alt="${name}"/>
        <h2>${name}</h2>
      </a>
    </article>
  `

  return view
}

export default Home
