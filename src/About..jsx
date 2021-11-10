import React from "react";
// import Footer from './components/Footer';
// import { NavLink } from "react-router-dom";
import Common from "./components/CommonPart";
import AboutpageCard from "./components/AboutpageCard";
import AboutSvg from './images/undraw_Online_page_re_lhgx.svg';



const About = () => {
    return (< >
        <Common
        
        page={'Top-Notch Design & Development Company'}
        pageInfo={'XYZ offer efficient and well-functioning technology elucidations through innovative design and development applications. Our offices are situated in the UK, Thailand, Australia, India and the USA'}
        buttonTxt={'Contact Now'}
        link={"./contact"}
        imgSrc={AboutSvg}
        />
        <div className="container-fluid pt-2"><div className="row">
            <div className=" col-9 col-lg-8 mx-auto">
            
            
            <div className="row ">

                <AboutpageCard
                title="7500+"
                text="PROJECT EXECUTED"
                color="#7E57C2"
                bgcolor="#7E57C220"
                />
                <AboutpageCard
                title="1500+"
                text="CLIENT WORLDWIDE"
                color="#5CE1E1"
                bgcolor="#5CE1E120"
                />
                <AboutpageCard
                title="300+"
                text="IT PROFESSIONALS"
                color="#FF725E"
                bgcolor="#FF725E20"
                />

            </div>
            </div>
            </div>
            </div>
        
        </>
    )
}

export default About;