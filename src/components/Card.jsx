import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <div className="col-lg-6 col-md-12 mb-3">
                <div className="card ms-2 px-4 py-2 " style={props.cardbackgroundColor} >
                <img src={props.imgSrc} className="card-img-top  mt-1 mb-0 mx-1" alt="..." height="200rem"/>
                    <div className="card-body d-flex align-content-center flex-column">
                        <h6 className="card-title text-center text-uppercase mt-0 mb-3" style={props.cardTitleColor}>{props.cardTitle}</h6>
                    <p className="text-center" style={props.cardTxtColor}  >{props.cardTxt}</p>
                    <NavLink to="/" className="servicepage_button text-center  py-2 " style={props.buttonStyle}>Learn More</NavLink>
                    </div>
                </div>
            </div>
    )
}

export default Card;