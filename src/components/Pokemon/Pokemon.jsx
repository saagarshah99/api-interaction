import React, {useState} from 'react';
import "./Pokemon.scss";

const Pokemon = ({ heading }) => {

    // defining state with "empty" object to begin with
    const [pokemon, setPokemon] = useState({
        types: [{type: {name: ""}}], 
        sprites: {back_default: ""}
    });

    // loading input in search value
    const [searchQuery, setSearchQuery] = useState("")
    const handleInput = (event) => setSearchQuery(event.target.value.toLowerCase());

    // fetching data from pokemon api in json response
    const getPokemon = (event) => {
        event.preventDefault();

        if(searchQuery) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`)
                .then(response => response.json())
                .then(jsonResponse =>{setPokemon(jsonResponse)})
                .catch(error => console.log(error))
        }
    }

    // return type or image if found from api
    const getPokemonType = (type) => {
        return type ? "Type: " + type.charAt(0).toUpperCase() + type.slice(1) : "";
    }
    const getPokemonImage = (img) => img ? img : "";

    return (
        <section className="pokemon">
            <h2 className="pokemon__heading">{heading}</h2>

            <form className="pokemon__form" onSubmit={getPokemon}>
                <input type="text" className="pokemon_search-text" onInput={handleInput} />
                <input type="submit" className="pokemon_search-btn" value="Search" />
            </form>

            <p className="pokemon__type-text">{getPokemonType(pokemon.types[0].type.name)}</p>
            
            <img className="pokemon__sprite" alt={""} 
            src={getPokemonImage(pokemon.sprites.back_default)} />
        </section>
    )
}

export default Pokemon
