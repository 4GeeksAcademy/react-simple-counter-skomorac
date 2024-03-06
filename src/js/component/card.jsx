import React from "react";
import "../../styles/index.css"

function Card(props){
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
            </div>
        </div>
    );
}

export default Card;