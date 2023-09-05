import { Link } from "react-router-dom";
import "./Pokemon.css";

function Pokemon(props) {
    return (
        <div className="pokemon-card">
            <Link to={`/pokemon/${props.id}`}>
                <div>{props.name}</div>
                <div><img src={props.image}/></div>
            </Link>
        </div>
    )
}

export default Pokemon;