import React from "react";
import HomeSvg from './images/undraw_Real_time_sync_re_nky7.svg';
import Common from "./components/CommonPart";
import HomepageCard from "./components/HomepageCard";


const Home = () => {

    return (< >
        <Common
            page={'Crafting Impressive Digital Solutions'}
            pageInfo={'We add digital contour to your ideas while integrating brilliant policies and state-of-the-art features. Leveraging cutting-edge technologies, our persistent team develops rewarding solutions.'}
            buttonTxt={'Get Started'}
            link={"/about"}
            imgSrc={HomeSvg}
        />

        <div className="container-fluid pt-2"><div className="row"><div className=" col-10 mx-auto">
            
            <div className="row ">
                <HomepageCard
                    title="Fastest 500"
                    text="The Fastest 500 Asia Pacific Award 2014"
                    bgcolor="#7E57C220"
                />
                <HomepageCard
                    title="Pride Of India"
                    text="The Pretigious Pride Of
                    India Award 2015"
                    bgcolor="#5CE1E120"
                />
                <HomepageCard
                    title="ISO 9001: 2015"
                    text="Got Accredited With
                    ISO 9001:2015 Certficate"
                    bgcolor="#FF725E20"
                />
                <HomepageCard
                    title="Fastest Growing"
                    text="Fastest Growing Indian IT
                    Company Excellence Award"
                    bgcolor="#52bf9020"
                    
                />
                

            </div>
        </div>
        </div>
            </div>

        </>
        )
}

export default Home;