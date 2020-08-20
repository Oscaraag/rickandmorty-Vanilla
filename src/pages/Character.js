import getData from '../utils/getData'
import getHash from '../utils/getHash'

const Character = async () => {
  const id = getHash()
  const Characters = await getData(id)

  const {
    name,
    image,
    episode,
    origin,
    species,
    gender,
    location,
    status,
  } = Characters

  const view = `
        <div class="Character-inner">
            <article class="Characters-card">
            <div class="img-containaer">
                <img src="${image}" alt="name" />
            </div>    
                <h2>${name}</h2>
            </article>
            <article class="Characters-card">
                <h3>Episodios: ${episode.length}</h3>    
                <h3>Status: ${status}</h3>    
                <h3>Species: ${species}</h3>    
                <h3>Gender: ${gender}</h3>    
                <h3>Origin: ${origin.name}</h3>    
                <h3>Last Location: ${location.name}</h3>    
            </article>
        </div>
    `
  return view
}

export default Character
