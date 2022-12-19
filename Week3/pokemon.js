const xhr = new XMLHttpRequest()
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        let pokemon = JSON.parse(xhr.responseText);
        showPokemon(pokemon.results);
    }
    else if(xhr.readyState === 4 && xhr.status !== 200){
    }
}

function showPokemon(pokemon){
    for (let i = 0; i < pokemon.length; i++){
        const character = document.createElement('li');
        character.textContent = pokemon[i].name;
        document.body.appendChild(character);
        
    }
}

