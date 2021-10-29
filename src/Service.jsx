
import React from "react";
// import { NavLink } from "react-router-dom";
import Card from "./components/Card";
import ServiceSvg from "./images/undraw_Operating_system_re_iqsc.svg";
import OurServices from "./OurServices";


const Service = () => {
    return (<div className="container-fluid pt-4"><div className="row"><div className="col-10 mx-auto my-4 ">
         <h1 className="text-center font_color mb-3">Our Services</h1>
        <div className="d-flex flex-column ">

        <div className="col-lg-4 col-md-6 col-sm-12 mx-auto mb-sm-5" id="home_img_div">
        <img className="img-fluid my-md-5" id="home_img" src={ ServiceSvg } alt="Home img"/>
        </div>

            
        <div className=" mx-auto col-lg-10 col-md-10 col-sm-10 pt-4 pt-lg-0  ">   
        <h1 className="text-center font_color mb-3">We Provides</h1>
        <div className="col-12">
        <div className="row ">
            
                        {OurServices.map((value, index) => {
                            return <Card
                                key={index}
                                imgSrc={value.img}
                                cardbackgroundColor={value.backgroundColor}
                                cardTitle={value.title}
                                cardTitleColor={value.color}
                                cardTxt={value.text}
                                cardTxtColor={value.cardtxtColor}
                                buttonStyle={value.buttonStyle}
                                
                            />
                        })};
            </div>
            </div>
            </div>    
  
            
    </div>

</div></div></div>)
}

export default Service;