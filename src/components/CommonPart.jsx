import React from "react";
import { NavLink } from "react-router-dom";


const Common =(props)=>{


return(
    <div className="container-fluid pt-4 "><div className="row"><div className="col col-10 mx-auto my-4">
        <div className="row ">

        <div className="d-flex flex-column justify-content-center col-md-6 col-sm-12 pt-4 pt-lg-0 mx-sm-auto order-lg-0 order-sm-1 ">
            <h1 className="ms-0">Welcome to <span className="fw-bold text-success"> {props.page} </span> Page</h1>
            <h2 className="h6 my-3">{props.pageInfo}</h2>
            <div className="my-3">
                <NavLink className="link_button" to={props.link}>{props.buttonTxt}</NavLink>
            </div>
        </div>

        <div className=" col-md-6 col-sm-12 pt-4 my-sm-5 order-lg-1 order-sm-0 " id="home_img_div">
            <img className="img-fluid" id="home_img" src={ props.imgSrc } alt="Home img"/>
        </div>
            
        </div>        
    </div></div></div>);

}
export default Common;