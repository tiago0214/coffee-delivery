const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById("LoadMoreButton")
const limit = 10;
let offset = 0;
const maxRecord = 151;


function loadPokemonsItens (offset, limit) {
    pokeApi.getPokemons(offset, limit)
        .then((lista = []) => {
            const newHtml = lista.map((pokemon) => `
                <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span> 
        
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type} </li>`).join('')}
                        </ol>
        
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>
            `
            ).join('')
            pokemonList.innerHTML += newHtml
        })
}

loadPokemonsItens(offset,limit)


loadMoreButton.addEventListener('click',() => {
    offset += limit;
    const qtdRecordNextPage = offset + limit
    
    if(qtdRecordNextPage >= maxRecord) {
        const newLimit = maxRecord - offset
        loadPokemonsItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
        
    }else{
        loadPokemonsItens(offset,limit)
    }
})
    