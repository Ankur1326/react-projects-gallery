// import React from 'react';
import { Link } from "react-router-dom";
function Image(props) {
    return(
        <div className="w-60 m-2 overflow-hidden">
            <Link to={`/details/${props.id}`}>
                <div><img src={props.image} alt="" className="scale-110 hover:scale-100 ease-out duration-300" /></div>
            </Link>
        </div>
    )    
}
export default Image;