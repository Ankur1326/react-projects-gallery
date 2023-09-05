import PokemonList from "../PokemonList/PokemonList";
import Search from "../search/Search";
import './Pokedex.css' // CSS import

function Pokedex() {

    return (
        <div className="pokedex-wrapper">
            <Search />
            <PokemonList />
        </div>
    )
}

export default Pokedex;