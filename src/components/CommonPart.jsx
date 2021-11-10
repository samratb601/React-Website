import React from "react";
import { NavLink } from "react-router-dom";


const Common =(props)=>{


return(
    <div className="container-fluid pt-4 "><div className="row"><div className="col col-10 mx-auto my-4">
        <div className="row ">

        <div className="d-flex flex-column justify-content-center text-center text-lg-start text-md-start col-md-6 col-sm-12 pt-4 pt-lg-0 mx-sm-auto order-lg-0 order-md-0 order-1 ">
            <h1 className="ms-0"> {props.page} </h1>
            <h2 className="h6 my-3 pt-lg-3 pt-1 fw-normal" style={{lineHeight:'30px'}}>{props.pageInfo}</h2>
            <div className="my-3 mx-auto mx-lg-0 mx-md-0 my-2 my-lg-3">
                <NavLink className="link_button " to={props.link}>{props.buttonTxt}</NavLink>
            </div>
        </div>

        <div className=" col-md-6 col-sm-12 pt-4 my-sm-5 order-lg-1 order-0 " id="home_img_div">
            <img className="img-fluid" id="home_img" src={ props.imgSrc } alt="Home img"/>
        </div>
            
        </div>
        <hr className="mb-5"/>
    </div>
    </div></div>);

}
export default Common;