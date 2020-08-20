import getData from '../utils/getData'

const Home = async () => {
  const Characters = await getData()
  const view = `
    <div class="Characters">
        <article class="Character-item">
            <a href="#/${Characters.results.id}/">
                <img src="${Characters.results.image}" alt="name"/> 
                <h2>${Characters.results.name} </h2>   
            </a>
        </article>
    </div>
    
    
    `
  return view
}

export default Home
