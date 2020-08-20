import getData from '../utils/getData'

const Home = async () => {
  const Characters = await getData()
  const view = `
    <div class="Characters">
      ${Characters.results.map(
        (char) =>
          `<article class="Character-item">
              <a href="#/${char.id}/">
                <img src="${char.image}" alt="name"/> 
                <h2>${char.name} </h2>   
              </a>
            </article>`
      ).join('')}
        
    </div>
    
    
    `

  return view
}

export default Home
