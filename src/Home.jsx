import React from "react";
import HomeSvg from './images/undraw_Real_time_sync_re_nky7.svg';
import Common from "./components/CommonPart";


const Home = () => {

    return (
        <Common
            page={'Home'}
            pageInfo={'Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel unde dignissimos! '}
            buttonTxt={'Get Started'}
            link={"#about"}
            imgSrc={HomeSvg}
        />
        )
}

export default Home;