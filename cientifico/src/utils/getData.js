const api = 'http://rickandmortyapi.com/api/character/'

async function getData (id) {
  const apiURL = id ? `${api}${id}` : api
  try {
    const response = await window.fetch(apiURL)
    const data = response.json()

    return data
  } catch (error) {
    console.error(error)
  }
}

export default getData
