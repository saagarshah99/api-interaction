import React, {useState, useEffect} from 'react';
import "./Pokemon.scss";

const Pokemon = ({ heading }) => {

    // defining state with "empty" object to begin with
    const [pokemon, setPokemon] = useState({
        types: [{type: {name: ""}}], 
        sprites: {back_default: ""}
    });

    // loading input in search value, randomly generate one by default
    const [searchQuery, setSearchQuery] = useState(Math.floor(Math.random() * 900) + 1)
    const handleInput = (event) => setSearchQuery(event.target.value.toLowerCase());

    // fetching data from pokemon api in json response
    const getPokemon = (event) => {
        if(event) event.preventDefault();

        if(searchQuery) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`)
                .then(response => response.json())
                .then(jsonResponse =>{setPokemon(jsonResponse)})
                .catch(error => console.log(error))
        }
    }
    useEffect(() => {getPokemon()}, []);

    const capitaliseFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    
    // return name, type or image if found from api
    const getPokemonName = (name) => name ? "Name: " + capitaliseFirstLetter(name) : "";
    const getPokemonType = (type) => type ? "Type: " + capitaliseFirstLetter(type) : "";
    const getPokemonImage = (img) => img ? img : "";

    return (
        <section className="pokemon">
            <h2 className="pokemon__heading">{heading}</h2>

            <form className="pokemon__form" onSubmit={getPokemon}>
                <input type="text" className="pokemon_search-text" onInput={handleInput} />
                <input type="submit" className="pokemon_search-btn" value="Search" />
            </form>

            <div className="pokemon__output">
                <section className="pokemon__output-text">
                    <p>{getPokemonName(pokemon.name)}</p>
                    <p>{getPokemonType(pokemon.types[0].type.name)}</p>
                </section>

                <section className="pokemon__output-img">
                    <img className="pokemon__sprite" alt={""} 
                    src={getPokemonImage(pokemon.sprites.back_default)} />
                </section>
            </div>
        </section>
    )
}

export default Pokemon
