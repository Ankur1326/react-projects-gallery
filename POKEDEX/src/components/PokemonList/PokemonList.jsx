import { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";
import "./PokemonList.css"


// const POKEDEX_URL = 'https://pokeapi.co/api/v2/pokemon'
function PokemonList() {

  const [pokemonList, setPokemonList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  const [POKEDEX_URL, setPokedexUrl] = useState("https://pokeapi.co/api/v2/pokemon/") //https://pokeapi.co/api/v2/pokemon

  const [nextUrl, setNextURl] = useState("")
  const [prevUrl, setPrevURl] = useState("")
  
    async function downloadPokemons() {
      setPokedexUrl(true)
        const response = await axios.get(POKEDEX_URL) // this downloads list of 20 pokemons
        const pokemonResults = response.data.results; // we get the array of pokemons from result
        console.log("response.data : ", response.data);
        setNextURl(response.data.next)
        setPrevURl(response.data.previous)

        // iterating over the array of pokemons, and using their url, to create an array of promises
        // that will download those 20 pokemons
        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));

        // passing that promise array to axios.all
        const pokemonData = await axios.all(pokemonResultPromise) // array of 20 pokemon detailed data 
        // console.log(pokemonData);

        // now iterate on the data of each pokemon, and extract id, name, image, types
        const pokeListResult = pokemonData.map((pokeData) => {
          const pokemon = pokeData.data;
          return {
            id: pokemon.id,
            name: pokemon.name,
            image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : sprites.front_shiny,
            types: pokemon.types
          } 
        });
        // console.log(res);
        // console.log(pokemonList);
        console.log(pokeListResult);
        setPokemonList(pokeListResult)
        setIsLoading(false)
    }
    
    useEffect(() => {
        downloadPokemons()
      }, [POKEDEX_URL]);

      return (
        <div className="pokemon-list-wrapper">
          <div>Pokemon List</div>
          <div className="pokemon-wrapper">
            {(isLoading) ? 'Loading....' : 
              pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)
              }
          </div>  
          <div className="control-btns">
              <button disabled={prevUrl == null} onClick={() => setPokedexUrl(prevUrl)}>Prev</button>
              <button disabled={nextUrl == null} onClick={() => setPokedexUrl(nextUrl)}>Next</button>
          </div>
        </div>
      )
    
}  

export default PokemonList;