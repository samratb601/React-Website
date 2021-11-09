
import React from "react";
// import { NavLink } from "react-router-dom";
import Card from "./components/Card";
import ServiceSvg from "./images/undraw_Operating_system_re_iqsc.svg";
import OurServices from "./OurServices";


const Service = () => {
    return (<div className="container-fluid pt-4"><div className="row"><div className="col-10 mx-auto my-4 ">
        <div className="px-0 mx-0 px-md-5 mx-md-5 d-flex flex-column align-content-center justify-content-center">
        <h1 className="text-center mt-3  mb-5 " >Nurture Your Business With #XYZ</h1>
        <h6 className="text-center my-3" style={{lineHeight:'30px'}}>We have a team of skilful designers, developers, and digital marketers who render quality services to our clients with extreme dedication.</h6>
        </div>
        <div className="d-flex flex-column ">

        <div className="col-lg-4 col-md-6 col-sm-12 mx-auto mb-sm-5" id="home_img_div">
        <img className="img-fluid my-md-5 " id="home_img" src={ ServiceSvg } alt="Home img"/>
        </div>

            
        <div className=" mx-auto col-lg-10 col-md-10 col-sm-10 pt-4 pt-lg-0  ">   
                
                <h6 className="text-center  mb-5">Our Services</h6>
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
                        })}
            </div>
            </div>
            </div>    
  
            
    </div>

</div></div></div>)
}

export default Service;