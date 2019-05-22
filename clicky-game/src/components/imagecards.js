import React from "react";
import "./imagecards.css";


function Card(props) {
    
    return (
       

            <div className="card" value={props.id} onClick={() => props.handleClick(props.id)}>
                <div className="img-container">
                    <img  alt={props.alt} src={props.image} />
                </div>
            </div>

    )

};



export default Card;
