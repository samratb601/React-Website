import React from "react";
// import Footer from './components/Footer';
// import { NavLink } from "react-router-dom";
import Common from "./components/CommonPart";
import AboutSvg from './images/undraw_Online_page_re_lhgx.svg';



const About = () => {
    return (< >
        <Common
        
        page={'About'}
        pageInfo={'Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel unde dignissimos!'}
        buttonTxt={'Contact Now'}
        link={"./contact"}
        imgSrc={AboutSvg}
    />
        
        </>
    )
}

export default About;