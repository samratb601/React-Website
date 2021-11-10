import React from 'react';
import FacebookOutlinedIcon from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';
import YouTube from '@material-ui/icons/YouTube';


const Footer = () => {
    let currentYear = new Date().getFullYear();
    return (<div className="d-flex align-content-center justify-content-center ">
        <div className="footer text-center  col-10" id="footer">
        <hr className="mb-5"/>
            <p className="fw-bold opacity-75"> © Copyright {currentYear} . All Rights Reserved. 
                <span className="h6 opacity-75"> Privacy Policy</span> | <span className="h6 opacity-75">Terms & Conditions</span>
            </p>
            <div className="align-content-center mt-5 social_icons_div">
                <FacebookOutlinedIcon className="mx-1 mx-md-2 mx-lg-3 social_icons" />
                <LinkedIn className="mx-1 mx-md-2 mx-lg-3 social_icons" />
                <YouTube className="mx-1 mx-md-2 mx-lg-3 social_icons" />
                <Instagram className="mx-1 mx-md-2 mx-lg-3 social_icons" />
                <Twitter className="mx-1 mx-md-2 mx-lg-3 social_icons" />
            </div>
            
    </div></div>)
}


export default Footer;